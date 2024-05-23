import LoginForm from '../components/LoginForm.tsx';
import useLoginUser from '../query/api/mutations/login.ts';
import { LoginFormTypes } from '../utils/types';
import { useAuth } from '../context/AuthContext.tsx';
import { useEffect } from 'react';
import { MutatingDots } from 'react-loader-spinner';

function LoginPage() {
  const { data, isPending, mutate, failureReason, isSuccess } = useLoginUser();
  const { login } = useAuth();
  const submitLogin = (formData: LoginFormTypes) => {
    try {
      mutate(formData);
    } catch (e) {
      return e;
    }
  };
  useEffect(() => {
    if (isSuccess && data) {
      login(data.access_token, data.refresh_token);
    }
  }, [login, data, isSuccess]);

  return (
    <div>
      <LoginForm loginUser={submitLogin} />
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

export default LoginPage;
