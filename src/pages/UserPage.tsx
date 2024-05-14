import { useForm } from 'react-hook-form';
import BaseInput from '../UI/BaseInput.tsx';
import BaseButton from '../UI/BaseButton.tsx';

interface UserProperties {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  username: string;
}

function UserPage() {
  const { register } = useForm<UserProperties>();
  const userData = {
    email: 'kolya@pes.duk',
    username: 'kolya@pes.duk',
    first_name: null,
    last_name: null,
  };
  const { email, username, first_name, last_name } = userData;
  return (
    <div className="container my-[100px]">
      <form className="max-w-[630px] w-full mx-auto flex flex-col gap-6">
        <BaseInput
          label="Username"
          value={username || ''}
          {...register('username')}
        />
        <BaseInput value={email || ''} label="Email" {...register('email')} />
        <BaseInput
          value={first_name || ''}
          label="First Name"
          {...register('first_name')}
        />
        <BaseInput
          value={last_name || ''}
          label="Last Name"
          {...register('last_name')}
        />
        <BaseButton className="text-white-main">Update data</BaseButton>
      </form>
    </div>
  );
}

export default UserPage;
