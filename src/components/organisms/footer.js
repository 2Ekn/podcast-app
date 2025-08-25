import Logo from "../atoms/navbar/logo";
import FooterLinks from "../molecules/footerLinks";
import FooterDownloads from "../molecules/footerDownloads";
import SocialMediaLinks from "../molecules/socialmediaLinks";

function Footer(){
    return(
        <footer  className="w-full h-[100%] bg-[#000f24] flex flex-col gap-2 p-4 border-t border-orange-500">
            <div className="w-full  text-white flex items-center justify-center gap-[10rem] ">
                <Logo/>
                <FooterLinks/>
                <FooterDownloads/>
                <SocialMediaLinks/>
            </div>
            <div className="mt-5">
                <p className="text-center text-[10px] text-white">©Tack För Kaffet Podcast 2020</p>
            </div>
        </footer>
    )
}

export default Footer;