import HomePageHero from "../atoms/homePageHero";
import YoutubePlayer from "../atoms/youtubePlayer";

function IndexContent(){
    return(
        <div className="flex flex-col items-center justify-center min-h-screen">
            <HomePageHero />
            <YoutubePlayer />
        </div>
    );
}

export default IndexContent;