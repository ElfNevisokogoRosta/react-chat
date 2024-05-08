import {
  UseMutateFunction,
  useMutation,
  UseMutationResult,
} from '@tanstack/react-query';
import registerUser from '../api/userApi/register.ts';
import { UserRegisterTypes } from '../../utils/types';

type UseRegisterMutationReturnType = [
  UseMutateFunction<void, Error, UserRegisterTypes, unknown>,
  boolean,
  boolean,
  boolean,
];

const useRegisterMutation = (): UseRegisterMutationReturnType => {
  const {
    mutate,
    isPending,
    isError,
    isSuccess,
  }: UseMutationResult<void, Error, UserRegisterTypes, unknown> = useMutation<
    void,
    Error,
    UserRegisterTypes,
    unknown
  >({
    mutationFn: (data: UserRegisterTypes) => {
      return registerUser(data);
    },
    mutationKey: ['user'],
  });

  return [mutate, isPending, isError, isSuccess];
};

export default useRegisterMutation;
