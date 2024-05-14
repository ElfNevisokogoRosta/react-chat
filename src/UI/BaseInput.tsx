import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn.ts';

const inputVariants = cva(
  'text-base outline-none border-2 border-transparent ',
  {
    variants: {
      variant: {
        default:
          'bg-transparent border-2 border-white-accent rounded-xl text-white-main focus:border-b-2 focus:border-yellow-main focus:bg-blue-accent ',
        transparent: 'py-3 pl-16 rounded-3xl',
      },
      size: {
        default: 'py-3 pl-6 ',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

type BaseInputProps = InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputVariants> & {
    error?: any;
    label?: string;
    icon?: ReactNode;
  };

const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(
  ({ className, label, error, variant, icon, size, ...rest }, ref) => {
    return (
      <label className="flex flex-col gap-1">
        {icon && <span>{icon}</span>}
        {label && (
          <span className="text-base text-white-main text-left">{label}</span>
        )}
        <input
          ref={ref}
          className={cn(inputVariants({ variant, size, className }))}
          {...rest}
        />
        {error && (
          <span className="text-left text-red-main text-sm">
            {error.message}
          </span>
        )}
      </label>
    );
  },
);

export default BaseInput;
