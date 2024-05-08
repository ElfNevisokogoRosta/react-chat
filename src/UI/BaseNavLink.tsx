import {NavigateProps, NavLink} from "react-router-dom";
import {FC, ReactNode} from "react";

type BaseNavLinkProps = NavigateProps & {
  label: string,
  icon: ReactNode
}

const BaseNavLink: FC<BaseNavLinkProps> = ({label, icon, ...rest}) => {
  return (
    <NavLink className='py-3 px-4 flex w-full justify-between items-center' {...rest}><span
      className='w-12 h-12 flex items-center justify-center bg-white-squeeze rounded-3xl'>{icon}</span>{label}</NavLink>
  );
};

export default BaseNavLink;