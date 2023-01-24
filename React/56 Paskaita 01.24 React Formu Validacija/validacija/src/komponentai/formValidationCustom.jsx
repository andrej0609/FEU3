import { useState } from 'react';
import CostomInput from './CustomInput';

const FormValidationCustom = () => {

  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });


  const inputs = [
    {
      id: 1,
      name: 'email',
      type: 'text',
      placeholder: 'Email',
      label: 'Email',
      error: 'Privalo tureti @',
      required: true
    },
    {
      id: 2,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      label: 'Password',
      error: 'Turi buti bent 8 simboliai',
      required: true
    }
  ];

  const handeSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  }

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
    handleValidation(e.target.name);
  }

  const handleValidation = (currentInput) => {
    switch (currentInput) {
      case 'email':
        values[currentInput].includes('@') ?
          setErrors({ ...errors, [currentInput]: false }) :
          setErrors({ ...errors, [currentInput]: true });
        break;
      case 'password':
        values[currentInput].length >= 8 ?
          setErrors({ ...errors, [currentInput]: false }) :
          setErrors({ ...errors, [currentInput]: true });
        break;
      default:
        break;
    }
  }


  return (
    <>
      <form onSubmit={handeSubmit}>
        {
          inputs.map(input => (
            <CostomInput
              key={input.id}
              value={values[input.name]}
              handleChange={handleChange}
              input={input}
              error={errors[input.name]}
            />
          ))
        }
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default FormValidationCustom;