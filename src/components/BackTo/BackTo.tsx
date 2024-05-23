import { useNavigate } from 'react-router-dom';
import { IoReturnDownBack } from 'react-icons/io5';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn.ts';
import { FC } from 'react';

const backToVariants = cva('', {
  variants: {
    variant: {
      default:
        'transition text-white-main flex items-center hover:text-orange-main text-lg font-extrabold',
      absolute: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type BackToProps = VariantProps<typeof backToVariants> & {
  className?: string;
};

const BackTo: FC<BackToProps> = ({ variant, className }) => {
  const navigate = useNavigate();
  const onBackToHandler = () => {
    return navigate(-1);
  };
  return (
    <button
      className={cn(backToVariants({ variant }), className)}
      onClick={onBackToHandler}
    >
      Back
      <IoReturnDownBack className="w-12 h-6 " width={'48px'} height={'48px'} />
    </button>
  );
};

export default BackTo;
