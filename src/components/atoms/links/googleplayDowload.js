import googlePlay from '../../../assets/googleplay.png';

function GooglePlayDownloadBtn(){
    return(
        <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={googlePlay} alt="Get it on Google Play" className="h-[36px] w-[110px] border border-white rounded"/>
        </a>
    )
}

export default GooglePlayDownloadBtn;