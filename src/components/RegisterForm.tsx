import BaseButton from '../UI/BaseButton.tsx';
import useCreateForm from '../utils/hooks/useCreateForm.tsx';
import { registerFormConfig } from '../utils/configs';
import { RegisterFormTypes } from '../utils/types';
import { RegisterFields } from '../utils/constants/registerFields.ts';
import { RegisterSchema } from '../utils/validation/RegisterSchema.ts';
import { FC } from 'react';

interface RegisterFormProps {
  registerUser: (data: RegisterFormTypes) => void;
}

const RegisterForm: FC<RegisterFormProps> = ({ registerUser }) => {
  const [formElements, handleSubmit, errors] = useCreateForm<
    RegisterFormTypes,
    RegisterFields
  >(registerFormConfig, RegisterSchema);
  return (
    <div className="py-4 flex flex-col gap-6 w-full max-w-[440px] ml-auto">
      <h3 className="text-white-main text-xl font-bold">Create account</h3>
      <form onSubmit={handleSubmit(registerUser)}>
        <div className="w-full text-center">
          <div className="flex flex-col gap-6">{...formElements}</div>
          {errors && (
            <div className="text-sm text-red-main text-left my-2">
              {errors.confirm?.message}
            </div>
          )}
          <BaseButton>Register</BaseButton>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
