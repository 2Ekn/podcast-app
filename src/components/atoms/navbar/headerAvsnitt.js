import { Link } from "react-router-dom";

function HeaderAvsnitt() {
    return (
        <div className="flex flex-col items-center text-orange-500 hover:text-orange-400 cursor-pointer">
            <Link href="/episodes">
                <i className="fa-solid fa-circle-play text-2xl"></i>
            </Link>
            <Link href="/episodes" className="text-xl">
                Avsnitt
            </Link>
        </div>
    );
}

export default HeaderAvsnitt;