import Header from "../organisms/header";
import Footer from "../organisms/footer"; 
import tfkBg from '../../assets/tfkBg.png';
import LoginPageContent from "../organisms/LoginPageContent";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function LoginPage(){
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            navigate("/profile");
        }
    }, [navigate]);


    return(
        <div
            className="min-h-screen bg-cover bg-center flex flex-col justify-between"
            style={{ backgroundImage: `url(${tfkBg})` }}
        >
            <Header />
            <LoginPageContent/>
            <Footer />
        </div>
    )
}

export default LoginPage;