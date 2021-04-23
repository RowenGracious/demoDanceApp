import React from 'react';
import { useFormContext } from 'react-hook-form';

//Reusuable input text component
const InputText = ({type, label, name, required, pattern, minLength}) => {
  const methods = useFormContext();
  const { register, formState: { errors } } = methods;

  return (
    <div className="grid grid-cols-1 gap-3">
      <label htmlFor={name}> {label} </label>
      <input
        className="border-2 h-10 p-2"
        id={name} 
        name={name} 
        type={type}
        {...register(name,{
          required: required && required,
          pattern: pattern && pattern,
          minLength: minLength && minLength
        })} 
      />
      {errors[name] && <span className="text-red-500" role="alert">{errors[name].message}</span>}
    </div>
  )
}

export default InputText
