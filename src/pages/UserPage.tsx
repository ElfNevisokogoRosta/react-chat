import BaseInput from '../UI/BaseInput.tsx';
import BaseButton from '../UI/BaseButton.tsx';
import { useAuth } from '../context/AuthContext.tsx';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { UpdateUserDTO } from '../utils/types';
import useUpdateUserMutation from '../query/api/mutations/updateUser.mutation.ts';
import BackTo from '../components/BackTo/BackTo.tsx';

function UserPage() {
  const [userFormData, setUserFormData] = useState<UpdateUserDTO>({
    first_name: '',
    last_name: '',
    username: '',
  });
  const { isUser } = useAuth();

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const field = e.target.name;
    const value = e.target.value;
    console.log({ field, value });
    setUserFormData((state) => ({ ...state, [field]: value }));
  };

  useEffect(() => {
    setUserFormData({
      first_name: isUser?.first_name || '',
      last_name: isUser?.last_name || '',
      username: isUser?.username || '',
    });
  }, []);

  const { mutate } = useUpdateUserMutation();

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(userFormData);
  };
  return (
    <div className="container relative">
      <h2 className="my-6 text-white-main text-2xl font-extrabold">
        This all data about
        <span className="ml-2 text-orange-accent">{isUser?.username}</span>
      </h2>
      <p className="my-4 text-xl text-white-main font-bold">{isUser?.email}</p>

      <form
        onSubmit={onSubmitHandler}
        className="max-w-[630px] w-full mx-auto flex flex-col gap-6"
      >
        {/*<BaseInput*/}
        {/*  label="Username"*/}
        {/*  name="username"*/}
        {/*  value={userFormData.username}*/}
        {/*  onChange={onChangeHandler}*/}
        {/*/>*/}
        <BaseInput
          label="First name"
          name="first_name"
          value={userFormData.first_name}
          onChange={onChangeHandler}
        />
        <BaseInput
          label="Last name"
          name="last_name"
          value={userFormData.last_name}
          onChange={onChangeHandler}
        />
        <BaseButton className="text-white-main">Update data</BaseButton>
      </form>
      <BackTo />
    </div>
  );
}

export default UserPage;
