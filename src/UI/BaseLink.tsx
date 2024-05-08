import { Link, LinkProps } from 'react-router-dom';
import { cva, VariantProps } from 'class-variance-authority';
import { FC } from 'react';
import { cn } from '../utils/cn.ts';

const linkVariants = cva('text-base text-yellow-main transition', {
  variants: {
    variant: {
      default: 'underline hover:text-white-main',
    },
    size: {
      default: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

interface BaseLinkProps extends LinkProps, VariantProps<typeof linkVariants> {}

export const BaseLink: FC<BaseLinkProps> = ({
  className,
  size,
  variant,
  ...rest
}) => {
  return (
    <Link
      className={cn(linkVariants({ size, variant, className }))}
      {...rest}
    />
  );
};
export default BaseLink;
