function Input({label, placeholder, type}) {
    return (
        <div className="flex flex-col">
            <label htmlFor="password" className="text-white mb-2">{label}</label>
            <input
                type={type}
                id="password"
                className="px-4 py-2 rounded border text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder={placeholder}
            />
        </div>
    );
}
export default Input;