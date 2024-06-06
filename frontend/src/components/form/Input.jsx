function Input({
  type,
  text,
  name,
  placeholder,
  handleOnChange,
  value,
  multiple,
}) {
  return (
    <>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-semibold text-gray-900 mt-2"
      >
        {text}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className="border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 bg-gray-300 placeholder-gray-400 focus:outline-none focus:border-[#002A48]"
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
        {...(multiple ? { multiple } : "")}
        
      />
    </>
  );
}

export default Input;
