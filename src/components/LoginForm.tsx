import { LoginFormTypes } from '../utils/types';
import BaseButton from '../UI/BaseButton.tsx';
import useCreateForm from '../utils/hooks/useCreateForm.tsx';
import { loginFormConfig } from '../utils/configs';
import { LoginFields } from '../utils/constants/loginFields.ts';
import { LoginSchema } from '../utils/validation/LoginSchema.ts';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/hooks/useAuth.tsx';

const LoginForm = () => {
  const { login } = useAuth();
  const router = useNavigate();
  const [formElements, handleSubmit] = useCreateForm<
    LoginFormTypes,
    LoginFields
  >(loginFormConfig, LoginSchema);
  const onSubmit = (data: LoginFormTypes) => {
    console.log(data);
    login('token');
    router('/dashboard');
  };
  return (
    <>
      <div className="py-4 flex flex-col gap-6 w-full max-w-[440px] ml-auto">
        <h3 className="text-white-main text-xl font-bold">
          Login in your account
        </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6">{...formElements}</div>

          <div className="w-full text-center">
            <BaseButton>Login</BaseButton>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
