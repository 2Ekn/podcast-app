import appstore from '../../../assets/appstore.png';

function AppStoreDownloadBtn(){
    return(
        <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={appstore} alt="Download on the App Store" className="h-[36px] w-[110px] rounded border border-white"/>
        </a>
    )
}

export default AppStoreDownloadBtn;