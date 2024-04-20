
import { SubmitHandler, useForm } from "react-hook-form";
import { LOGIN_FORM } from "../data";


import ErrorMessage from "../errors/ErrorMessage";

import { axiosInstance } from "../config/axiosConfig";
import { IErrors } from "../interface";
import { AxiosError } from "axios";

import Btn from "../ui/Btn";
import { loginSchema } from "../validation/loginValidation";
import Input from "../ui/Input";
import { yupResolver } from "@hookform/resolvers/yup";



interface IFormInput {
  identifier:string
  password:string
}

const Login = () => {

  const { register, handleSubmit, 
    formState:{errors} } = useForm<IFormInput>({
    resolver: yupResolver(loginSchema)
  })

  const renderLogin = LOGIN_FORM.map(({placeholder,
    type,name,validation},idx) => (
       <div key={idx}> <Input  placeholder={placeholder} type={type}
       {...register(name,validation)}/>
       
       {errors[name] && <ErrorMessage 
       msg={errors[name]?.message} />}
       </div>
       ))
       // RENDER //
       const onSubmit: SubmitHandler<IFormInput> = async (data) => {
     
     try {
      const {status,data:res}=await axiosInstance.post('auth/local',data)
       
     if(status === 200){

         localStorage.setItem('addLoged', JSON.stringify(res));
            setTimeout(() =>{
               location.replace('/Dashboard')
            },1000)
     }
     } catch (error) {
      const errorObj = error as AxiosError<IErrors>;
       alert(`${errorObj.response?.data.error.message}`)
     }

  }

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-center mb-4 text-xl font-medium">
        Login to Dashboard</h2>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
         {renderLogin}
        <Btn cla="bg-red-700" >
          Login
          </Btn>
      </form>
    </div>
  );
};

export default Login;



