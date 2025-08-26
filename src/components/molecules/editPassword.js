import Input from "../atoms/input";
import OrangeButton from "../atoms/orangeButton";

function EditPassword() {
    return (
        <form className="flex flex-col gap-5 text-white items-center justify-start mt-10">
            <Input  label={"Nuvarande Lösenord: "} placeholder={"Nuvarande lösenord"} type={"password"}/>
            <Input label={"Nytt Lösenord: "} placeholder={"Nytt lösenord"} type={"password"}/>
            <Input label={"Bekräfta lösenord: "} placeholder={"Bekräfta lösenord"} type={"password"}/>
            <OrangeButton text={"Uppdatera lösenord"} />
        </form>
    );
}

export default EditPassword;