function EpisodePlayer() {
  return(
    <div className="flex flex-row items-center text-white">
        <div className="relative inline-block mr-4 ">
            <img
                className="h-20"
                src="https://cms.tackforkaffet.se/grejer/2025/08/754.jpg"
                alt="754. Johaank, 40."
            />
            <svg
                aria-labelledby="svg-inline--fa-title-n03qHhzkCFIy"
                data-prefix="fas"
                data-icon="circle-play"
                className="absolute inset-0 m-auto text-white opacity-70 cursor-pointer w-10 h-10 hover:opacity-100"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
            >
                <title id="svg-inline--fa-title-n03qHhzkCFIy">pausa</title>
                <path
                fill="currentColor"
                d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"
                ></path>
            </svg>
        </div>
            <div className="w-64 h-[100%] rounded flex flex-col justify-between">
        <div className="flex flex-col">
            <h3 className="text-xl font-bold text-orange-500">Episode Title</h3>
            <p>Episode</p>
        </div>
        <progress
            className="h-[3px] w-full rounded overflow-hidden 
                    [&::-webkit-progress-bar]:bg-blue-800
                    [&::-webkit-progress-value]:bg-orange-500
                    [&::-moz-progress-bar]:bg-blue-500"
            value="30"
            max="100"
        />
        </div>
    </div>
  ); 
}
export default EpisodePlayer;