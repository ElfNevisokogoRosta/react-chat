import { FC } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../utils/cn.ts';

interface BurgerButtonProps {
  active: boolean;
  onClick: () => void;
  className?: string;
}

const burgerVariants = cva(
  'transition-transform transition-rotate duration-10000 block w-12 h-[2px] bg-white-accent',
  {
    variants: {
      variant: {
        default: '',
        active:
          'absolute top-1/2 left-1/2 rotate-45 -translate-x-1/2 -translate-y-1/2 ',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

const BurgerButton: FC<BurgerButtonProps> = ({
  active,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'w-16 p-4 h-16 relative flex flex-col items-center justify-between transition-transform duration-10000 ease-in-out',
        className,
      )}
    >
      <span
        className={cn(
          burgerVariants({ variant: active ? 'active' : 'default' }),
        )}
      ></span>
      {!active ? (
        <span className={cn(burgerVariants({ variant: 'default' }))}></span>
      ) : (
        ''
      )}
      <span
        className={cn(
          burgerVariants({ variant: active ? 'active' : 'default' }),
          `${active ? '-rotate-45' : ''}`,
        )}
      ></span>
    </button>
  );
};

export default BurgerButton;
