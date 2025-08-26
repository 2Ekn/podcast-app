import appstore from '../../../assets/appstore.png';
import { Link } from 'react-router-dom';

function AppStoreDownloadBtn(){
    return(
        <Link href="#" target="_blank" rel="noopener noreferrer">
            <img src={appstore} alt="Download on the App Store" className="h-[36px] w-[110px] rounded border border-white"/>
        </Link>
    )
}

export default AppStoreDownloadBtn;