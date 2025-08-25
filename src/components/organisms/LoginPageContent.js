import { Link } from "react-router-dom";
import LoginForm from "../molecules/loginForm";

function LoginPageContent(){
    return(
        <div className="flex flex-col items-center justify-center min-h-screen p-5 " >
            <LoginForm />
            <Link to="/register" className="text-white mt-4 underline">Inget konto? Registrera dig här!</Link>
        </div>
    );
}

export default LoginPageContent;