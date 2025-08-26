import { Link } from "react-router-dom";
import Input from "../atoms/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

 
function LoginForm(){    
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin(e) {
        e.preventDefault();

        try{
            const response = await fetch("https://localhost:7022/api/auth/login", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });

            if(response.ok){
                const data = await response.json();
                const token = data.token;
            
                if(token){
                    localStorage.setItem("token", token);
                    navigate("/profile");
                }
                else{
                    console.error("No token received");
                }
            }
        }
        catch (error) {
            console.error("Error logging in:", error);
        }
    }

    return(
        <form onSubmit={handleLogin} className="flex flex-col gap-4 bg-[#000f24] rounded-lg shadow-lg w-[512px] p-20 bg-opacity-75">
            <h2 className="text-white text-3xl font-bold mb-6 text-center">Logga in</h2>
            <Input 
                label={"E-postaddress: "} 
                placeholder={"E-postaddress"} 
                type={"email"} 
                id={"email"}
                onChange={(e) => {setEmail(e.target.value);}}
                value={email}
            />
            <Input 
                label={"Lösenord: "} 
                placeholder={"Lösenord"} 
                type={"password"}
                id={"password"}
                onChange={(e) => {setPassword(e.target.value); }}
                value={password}
            />

            <Link to="/forgotPassword" className="text-white underline">Glömt lösenord?</Link>
            <button type="submit" className="bg-orange-500 w-full h-[40px] rounded-[5rem] text-white font-bold text-xl mt-4">Logga in</button>
        </form>

    );
}

export default LoginForm;