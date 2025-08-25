function PasswordInput() {
    return (
        <div className="flex flex-col">
            <label htmlFor="password" className="text-white mb-2">Password:</label>
            <input
                type="password"
                id="password"
                className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Lösenord"
            />
        </div>
    );
}
export default PasswordInput;