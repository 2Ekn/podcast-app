function HeaderLogin() {
    return (
        <div className="flex flex-col items-center text-orange-500 hover:text-orange-400 cursor-pointer">
            <a href="/logIn">
                <i className="fa fa-user text-2xl" aria-hidden="true"></i>
            </a>
            <a href="/profile" className="text-lg">
                Logga in
            </a>
        </div>
    );
}

export default HeaderLogin;