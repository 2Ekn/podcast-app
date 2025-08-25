import { Link } from "react-router-dom";

function HeaderProfile(){
    return(
        <div className="flex flex-col items-center text-orange-500 hover:text-orange-400 cursor-pointer">
            <Link href="/profile">
                <i class="fa-solid fa-user"></i>
            </Link>
            <Link href="/profile">
                Profil
            </Link>
            
        </div>
    );
}

export default HeaderProfile;