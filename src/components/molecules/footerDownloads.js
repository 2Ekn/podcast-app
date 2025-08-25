import AppStoreDownloadBtn from "../atoms/links/appstoreDownload";
import GooglePlayDownloadBtn from "../atoms/links/googleplayDowload";

function FooterDownloads(){
    return(
        <div className="flex flex-col items-center text-sm gap-3">
            <div className="text-sm flex flex-col gap-1">
                <p>Förbättra lyssnarupplevelsen?</p>
                <p className="border-b border-orange-500 text-center">Ladda ner våran app!</p>
            </div>
            <AppStoreDownloadBtn/>
            <GooglePlayDownloadBtn/>
        </div>
    )
}
export default FooterDownloads;