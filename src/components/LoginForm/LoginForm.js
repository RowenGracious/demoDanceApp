import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useRouter } from 'next/router';

import InputText from '../common/InputText/InputText';
import PrimaryButton from '../common/Button/PrimaryButton';

import { userData } from '../../utlis/utils';

const LoginForm = () => {
  const methods = useForm();
  const router = useRouter()

  const onSubmit = (data) => {
    //comparing the Form login information with hardcoded user information
    if(userData.emailId === data.emailID.toLowerCase() && userData.password === data.password) {
      //IF true set the localstorage token
      localStorage.setItem('accessToken', Math.random().toString(36));
      return router.push('/dashboard');
    } else {
      alert("Login details incorrect");
    }
  }

  return (
    <FormProvider {...methods}>
      <form className="mx-auto self-center md:w-4/6 w-full p-20 grid grid-cols-1 gap-8 rounded overflow-hidden border-4 border-light-blue-500 border-opacity-25 shadow-lg" onSubmit={methods.handleSubmit(onSubmit)}>
      <h1 className="mx-auto uppercase text-purple-500 font-bold"> Haligonia Dance Academy </h1>
        <h2> Enter Login Information: </h2>
        <InputText 
          type="text" 
          label="Enter your Email ID" 
          name="emailID"
          required="required"
          pattern={{
            value: /\S+@\S+.\S+/,
            message: "Entered value does not match email format"
          }}
        />
        <InputText 
          type="password" 
          label="Enter your Password" 
          name="password"
          required="required"
          minLength= {{
            value: 5,
            message: "min length is 5"
          }}
        />
        <PrimaryButton type="submit"> Continue </PrimaryButton>
      </form>
    </FormProvider>
  );
}

export default LoginForm