function Input({label, placeholder, type, id, onChange, value}) {
    return (
        <div className="flex flex-col">
            <label htmlFor="password" className="text-white mb-2">{label}</label>
            <input
                type={type}
                id={id}
                className="px-4 py-2 rounded border text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
        </div>
    );
}
export default Input;