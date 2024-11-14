import React from 'react'


const types = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ,
    message: 'preencha um email valido',
  },
  password: {
    regex: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/ ,
    message: 'A senha precisa de numeros, pelo menos uma letra maiuscula e minuscula e no minimo 8 caracteres.',
  },
  number: {
    regex: /^\d+$/,
    message: "Utilize apenas Numeros",
  },
} 

const useForm = (type) => {
  const [value, setValue] = React.useState("")
  const [error, setError] = React.useState(null)

  function validate(value) {
    if(type === false) return true;
    if(value.length === 0) {
      setError("preencha um valor");
      return false;
    } else if(types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null)
      return true
    }
  }

  function onChange ({ target}) {
    if(error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  }
}

export default useForm
