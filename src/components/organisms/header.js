import Logo from "../atoms/navbar/logo";
import HeaderRightSide from "../molecules/headerRightSide";

function Header(){
    return(
        <header className="flex flex-row flex-wrap justify-between items-center p-1 text-white border-b border-orange-500 bg-[#000f24]">
            <Logo/>   
            <HeaderRightSide/>
        </header>

    );
}

export default Header;