import RegisterForm from '../components/RegisterForm.tsx';
import { RegisterFormTypes } from '../utils/types';
import { MutatingDots } from 'react-loader-spinner';
import { useAuth } from '../context/AuthContext.tsx';
import useRegisterUser from '../query/api/mutations/register.ts';
import { useEffect } from 'react';

function RegisterPage() {
  const { login } = useAuth();
  const { mutate, data, isSuccess, failureReason, isPending } =
    useRegisterUser();
  const registerUser = (formData: RegisterFormTypes) => {
    const { email, password, username } = formData;
    const userData = { email, password, username };
    mutate(userData);
  };
  useEffect(() => {
    if (isSuccess && data) {
      login(data.access_token, data.refresh_token);
    }
  }, [login, data, isSuccess]);
  return (
    <div>
      <RegisterForm registerUser={registerUser} />
      {isPending && (
        <MutatingDots
          visible={true}
          height="100"
          width="100"
          color="#4fa94d"
          secondaryColor="#4fa94d"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass="text-center"
        />
      )}
      {failureReason && <span>{failureReason.message}</span>}
    </div>
  );
}

export default RegisterPage;
