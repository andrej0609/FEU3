const CustomInput = ({ value, handleChange, input, error }) => {

  return (
    <>
      <div>
        <label htmlFor={input.name}>{input.label}</label>
        <input
          type={input.type}
          name={input.name}
          placeholder={input.placeholder}
          value={value}
          onChange={(event) => handleChange(event)}
          required={input.required}
        />
        <span>{error && input.error}</span>
      </div>
    </>
  );
}

export default CustomInput;