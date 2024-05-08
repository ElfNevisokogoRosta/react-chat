import RegisterForm from '../components/RegisterForm.tsx';
import { RegisterFormTypes } from '../utils/types';
import useRegisterMutation from '../query/mutations/useRegister.mutation.ts';
import { MutatingDots } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const [mutate, isPending, isError, isSuccess] = useRegisterMutation();
  const navigate = useNavigate();
  const registerUser = (data: RegisterFormTypes) => {
    const { email, password, username } = data;
    const userData = { email, password, username };
    mutate(userData);
    if (isSuccess) return navigate('/dashboard');
  };
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
      {isError && <span>Server error</span>}
    </div>
  );
}

export default RegisterPage;
