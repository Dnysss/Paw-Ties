function Select({ text, name, options, handleOnChange, value }) {
  return (
    <>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-semibold text-gray-900 mt-2"
      >
        {text}
      </label>
      <select
        name={name}
        id={name}
        className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-gray-300 placeholder-gray-400 focus:outline-none focus:border-[#002A48]"
        onChange={handleOnChange}
        value={value || ""}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
}

export default Select;
