import { useState } from 'react';
import { cn } from '../../utils/cn.ts';
import BurgerButton from '../ui/BurgerButton.tsx';
import NavBar from '../Home/NavBar.tsx';
import { cva } from 'class-variance-authority';

const sideBarVariant = cva(
  'z-40 relative bg-white-main transition-all h-screen max-w-[75px] border-r-2 pr-2 border-blue-main',
  {
    variants: {
      variant: {
        default: '',
        active: 'max-w-[160px]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

const SideBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const setSideBar = () => {
    setIsVisible((state) => !state);
  };
  return (
    <div
      className={cn(
        sideBarVariant(
          !isVisible ? { variant: 'default' } : { variant: 'active' },
        ),
      )}
    >
      <BurgerButton
        active={isVisible}
        onClick={setSideBar}
        className="ml-auto"
      />
      <nav className="my-6 pl-4 py-3 overflow-hidden flex flex-col gap-2">
        <NavBar />
      </nav>
    </div>
  );
};

export default SideBar;
