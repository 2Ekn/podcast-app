import ProfilePic from '../../assets/exempelProfile.jpg';

function ProfilePicture() {
    return (
        <div className="flex flex-col items-center">
            <img src={ProfilePic} alt="Profile" className="w-32 h-32 rounded-full mt-10 border-2 border-orange-500" />
        </div>
    );
}

export default ProfilePicture;