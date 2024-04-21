import {registerFormConfig} from "../utils/configs";
import BaseForm from "../UI/BaseForm.tsx";
import {useForm} from "react-hook-form";
import {RegisterSchema} from "../utils/validation/RegisterSchema.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import BaseButton from "../UI/BaseButton.tsx";
import {RegisterFormTypes} from "../utils/types";
import {useEffect} from "react";


const RegisterForm = () => {
  const {register, handleSubmit, formState: {errors}} = useForm<RegisterFormTypes>({
    resolver: zodResolver(RegisterSchema)
  })
  const config = registerFormConfig.map(({name, ...rest}) => {
    return {...rest, ...register(name)}
  })
  const onSubmit = (data: RegisterFormTypes) => {
    console.log(errors)
    console.log(data)
  }
  useEffect(() => {
    console.log(errors)
  }, [errors])
  return (
    <div className='container'>
      <div className='py-4 flex flex-col gap-6 w-full max-w-[440px] ml-auto'>
        <h3 className='text-white-main text-xl font-bold'>Create account</h3>
        <form onSubmit={handleSubmit(onSubmit)}>

          <BaseForm config={config}/>
          <div className='w-full text-center'>
            <BaseButton>Register</BaseButton>
          </div>

        </form>
      </div>
    </div>
  );
};

export default RegisterForm;