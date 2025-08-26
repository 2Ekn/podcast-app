
import Input from "../atoms/input";
import OrangeButton from "../atoms/orangeButton";

function EditForm() {
    return (        
            <form className="flex flex-col items-center justify-start gap-5 mt-10 text-white">
                <Input label={"Visningsnamn: "} placeholder={"Example"} />
                <Input label={"E-post: "} placeholder={"Example@hotmail.com"} />
                <OrangeButton text={"Uppdatera profil"} />
            </form>
    );
}

export default EditForm;