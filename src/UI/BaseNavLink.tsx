import { NavigateProps, NavLink } from 'react-router-dom';
import { FC, ReactNode } from 'react';

type BaseNavLinkProps = NavigateProps & {
  label: string;
  icon: ReactNode;
};

// const navElementVariant = cva('', {
//   variants: {
//     variant: {
//       default: '',
//       active: '',
//     },
//   },
//   defaultVariants: {
//     variant: 'default',
//   },
// });

const BaseNavLink: FC<BaseNavLinkProps> = ({ label, icon, to, ...rest }) => {
  // const location = useLocation();
  // const isActive = location.pathname.includes(to as string);
  return (
    <NavLink
      className="w-full bg-white-main flex items-center gap-3 border rounded-xl hover:bg-blue-main hover:text-white-squeeze hover:border-yellow-main transition"
      {...rest}
      to={to}
    >
      <span className="w-12 h-12 flex items-center justify-center flex-shrink-0">
        {icon}
      </span>
      <span>{label}</span>
    </NavLink>
  );
};

export default BaseNavLink;
