import HomePageHero from "../atoms/homePageHero";
import OrangeButton from "../atoms/orangeButton";
import YoutubePlayer from "../atoms/youtubePlayer";
import EpisodePlayer from "../molecules/episodePlayer";

function IndexContent(){
    return(
        <div className="flex flex-col items-center justify-center min-h-screen gap-10 mt-10 w-full">
            <HomePageHero />
            <YoutubePlayer />
            <div className="flex flex-col items-center justify-center w-full mt-8 gap-4 border-orange-500 pt-8 ">
                <h3 className="text-white text-4xl font-bold border-b-2 border-orange-500">Senaste Avsnitten</h3>
                <div className="flex  justify-center mt-8 w-full px-4 md:px-16 lg:px-32 xl:px-48 2xl:px-64 flex-row md:flex-col lg:flex-row gap-[3rem]">
                    <EpisodePlayer />
                    <EpisodePlayer />
                </div>
                <a href="/episodes" className="mt-4 mb-16">
                    <OrangeButton text={"Se alla avsnitt"} />
                </a>
            </div>
        </div>
    );
}

export default IndexContent;