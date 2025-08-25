function HeaderAvsnitt() {
    return (
        <div className="flex flex-col items-center text-orange-500 hover:text-orange-400 cursor-pointer">
            <a href="/episodes">
                <i className="fa-solid fa-circle-play text-2xl"></i>
            </a>
            <a href="/episodes" className="text-xl">
                Avsnitt
            </a>
        </div>
    );
}

export default HeaderAvsnitt;