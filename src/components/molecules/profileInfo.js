import OrangeButton from "../atoms/orangeButton";
import ProfilePicture from "../atoms/profilePicture"

function ProfileInfo(){
    return(
        <div className="flex flex-col items-center">
            <ProfilePicture />
            <h1 className="text-3xl font-bold mb-4 mt-10">Example</h1>
            <p className="text-md mb-5 text-orange-500">Premium</p>
            <OrangeButton text={"Hantera prenumeration"} />
        </div>
    )
}

export default ProfileInfo;