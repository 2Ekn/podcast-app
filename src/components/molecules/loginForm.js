import UsernameInput from "../atoms/usernameInput";
import PasswordInput from "../atoms/passwordInput";
import { Link } from "react-router-dom";


function LoginForm(){
    return(
        <form className="flex flex-col gap-4 bg-[#000f24] rounded-lg shadow-lg w-[512px] p-20 bg-opacity-75">
            <h2 className="text-white text-3xl font-bold mb-6 text-center">Logga in</h2>
            <UsernameInput />
            <PasswordInput />
            <Link to="/forgotPassword" className="text-white underline">Glömt lösenord?</Link>
            <button type="submit" className="bg-orange-500 w-full h-[40px] rounded-[5rem] text-white font-bold text-xl mt-4">Logga in</button>
        </form>

    );
}

export default LoginForm;