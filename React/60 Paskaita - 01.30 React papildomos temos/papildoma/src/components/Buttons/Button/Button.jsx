import { useState } from "react";

const Button = () => {
  const [value, setValue] = useState('Paspausk mane');

  const clickHandler = () => {
    setValue('Aciu uz paspaudima');
  };

  return (
    <button onClick={clickHandler} title="dummyButton" >
      {value}
    </button>
  );
};

export default Button;