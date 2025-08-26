import EditForm from "../molecules/editForm";
import EditPassword from "../molecules/editPassword";
import ProfileInfo from "../molecules/profileInfo";

function ProfileContent() {
    return (
        
        <div className="flex flex-col items-center justify-center w-full text-white">
            <div className="bg-[#000f24] flex flex-col items-center justify-center bg-opacity-50 rounded-lg p-10 m-10 w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2">
                <div className="flex flex-col items-center justify-center border-b border-orange-500 w-full pb-5">
                    <ProfileInfo  />
                </div>
                    <h2 className="text-3xl font-bold mt-10">Din Information</h2>
                <div className="flex flex-row md:flex-row gap-10"  >
                    <EditForm />
                    <EditPassword />
                </div>
            </div>
        </div>
    );
}

export default ProfileContent;