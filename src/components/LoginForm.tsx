import {useForm} from "react-hook-form";
import {LoginFormTypes} from "../utils/types";
import {zodResolver} from "@hookform/resolvers/zod";
import {LoginSchema} from "../utils/validation/LoginSchema.ts";
import BaseForm from "../UI/BaseForm.tsx";
import {loginFormConfig} from "../utils/configs/LoginFormConfig.ts";
import BaseButton from "../UI/BaseButton.tsx";
import {useEffect} from "react";

const LoginForm = () => {
  const {register, handleSubmit, formState: {errors}} = useForm<LoginFormTypes>({resolver: zodResolver(LoginSchema)})
  const config = loginFormConfig.map(({name, ...rest}) => {
    return {...rest, ...register(name)}
  })
  const onSubmit = (data: LoginFormTypes) => {
    console.log(data)
  }
  useEffect(() => {
    console.log(errors)
  }, [errors])
  return (
    <div className='container'>
      <div className='py-4 flex flex-col gap-6 w-full max-w-[440px] ml-auto'>
        <h3 className='text-white-main text-xl font-bold'>Login in your account</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <BaseForm config={config}/>
          <div className='w-full text-center'>
            <BaseButton>Login</BaseButton>
          </div>

        </form>
      </div>

    </div>
  );

}

export default LoginForm