import {
  FieldValues,
  Path,
  useForm,
  UseFormHandleSubmit,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormConfigTypes } from '../types';
import { ZodSchema } from 'zod';
import BaseInput from '../../UI/BaseInput.tsx';
import { ReactNode } from 'react';

function UseCreateForm<T extends FieldValues, K>(
  config: FormConfigTypes<K>[],
  schema: ZodSchema,
): [ReactNode[], UseFormHandleSubmit<T>, any] {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<T>({ resolver: zodResolver(schema) });
  const formElements = config.map(({ tag, name, label, ...rest }) => {
    switch (tag) {
      case 'input':
        return (
          <BaseInput
            key={name as string}
            {...register(name as Path<T>)}
            label={label}
            error={errors[name as string]}
            {...rest}
          />
        );
      default:
        break;
    }
  });
  return [formElements, handleSubmit, errors];
}

export default UseCreateForm;
