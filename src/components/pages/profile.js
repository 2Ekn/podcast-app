import Header from "../organisms/header";
import Footer from "../organisms/footer";
import tfkBg from '../../assets/tfkBg.png';

function Profile() {
    return (
        <div className="min-h-screen bg-cover bg-center flex flex-col justify-between align-center"
            style={{ backgroundImage: `url(${tfkBg})` }}
        >
            <Header />
            <div>
                <h1 className="text-4xl text-white font-bold mb-4">Profile Page</h1>
                <p className="text-white text-lg">This is the profile page content.</p>
            </div>
            <Footer/>
        </div>
    );
}

export default Profile;