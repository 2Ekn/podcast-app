function UsernameInput() {
    return (
        <div className="flex flex-col">
            <label htmlFor="username" className="text-white mb-2">Användarnamn:</label>
            <input
                type="text"
                id="username"
                className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Användarnamn"
            />
        </div>
    );
}

export default UsernameInput;