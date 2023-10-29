const CustomInputContact = ({
  idName,
  type,
  value,
  setValue,
  placeholder,
  alert,
}) => {
  const handleInputChange = (event) => {
    event.preventDefault();
    setValue(event.target.value);
  };
  return (
    <div className="custom-input-contact">
      <label htmlFor={idName}>{idName}</label>
      <input
        id={idName}
        type={type}
        name={idName}
        value={value}
        placeholder={placeholder}
        onChange={(e) => handleInputChange(e)}
        className={alert && "bcg-red"}
      />
      <p className="text-alert">{alert && alert}</p>
    </div>
  );
};
export default CustomInputContact;
