import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn.ts';

const buttonVariants = cva(
  'text-base border mx-auto my-9 border-transparent transition font-bold',
  {
    variants: {
      variant: {
        default:
          'bg-gray-main rounded-md text-blue-secondary hover:bg-yellow-main',
      },
      size: {
        default: 'py-3 px-6',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
  ({ className, size, variant, ...rest }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...rest}
      />
    );
  },
);

export default BaseButton;
