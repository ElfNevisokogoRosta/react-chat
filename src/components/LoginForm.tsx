import { LoginFormTypes } from '../utils/types';
import BaseButton from '../UI/BaseButton.tsx';
import useCreateForm from '../utils/hooks/useCreateForm.tsx';
import { loginFormConfig } from '../utils/configs';
import { LoginFields } from '../utils/constants/loginFields.ts';
import { LoginSchema } from '../utils/validation/LoginSchema.ts';
import { FC } from 'react';

interface LoginFormProps {
  loginUser: (data: LoginFormTypes) => void;
}

const LoginForm: FC<LoginFormProps> = ({ loginUser }) => {
  const [formElements, handleSubmit] = useCreateForm<
    LoginFormTypes,
    LoginFields
  >(loginFormConfig, LoginSchema);
  return (
    <>
      <div className="py-4 flex flex-col gap-6 w-full max-w-[440px] ml-auto">
        <h3 className="text-white-main text-xl font-bold">
          Login in your account
        </h3>
        <form onSubmit={handleSubmit(loginUser)}>
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
