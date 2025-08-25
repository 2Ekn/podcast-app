import { Link } from "react-router-dom";

function HeaderLogin() {
    return (
        <div className="flex flex-col items-center text-orange-500 hover:text-orange-400 cursor-pointer">
            <Link to="/login-page">
                <i className="fa fa-user text-2xl" aria-hidden="true"></i>
            </Link>
            <Link to="/login-page" className="text-lg">
                Logga in
            </Link>
        </div>
    );
}

export default HeaderLogin;