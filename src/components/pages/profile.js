import Header from "../organisms/header";
import Footer from "../organisms/footer";
import tfkBg from '../../assets/tfkBg.png';
import ProfileContent from "../organisms/profileContent";

function Profile() {

    const token = localStorage.getItem("token");
    
    if (!token) {
        window.location.href = "/login"; 
    }
    
    return (
        <div className="min-h-screen bg-cover bg-center flex flex-col justify-between align-center"
            style={{ backgroundImage: `url(${tfkBg})` }}
        >
            <Header />
                <ProfileContent />
            <Footer/>
        </div>
    );
}

export default Profile;