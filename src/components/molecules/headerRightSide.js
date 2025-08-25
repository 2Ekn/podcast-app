import HeaderAvsnitt from "../atoms/navbar/headerAvsnitt";
import HeaderLogin from "../atoms/navbar/headerLogin";

function HeaderRightSide(){
    return(
        <div className="flex flex-row gap-10 pr-10">
            <HeaderAvsnitt/>
            <HeaderLogin/>
        </div>        
    );
}

export default HeaderRightSide;