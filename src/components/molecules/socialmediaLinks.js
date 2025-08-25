import FacebookIcon from "../atoms/links/facebookIcon";
import TwitterIcon from "../atoms/links/twitterIcon";
import YoutubeIcon from "../atoms/links/youtubeIcon";

function SocialMediaLinks(){
    return(
        <div className="flex flex-col text-white gap-2">
            <p className="text-sm">Följ oss</p>
            <div className="flex flex-row gap-2 text-3xl">
                <FacebookIcon/>
                <TwitterIcon/>
                <YoutubeIcon/>
            </div>
        </div>
    )
}

export default SocialMediaLinks;