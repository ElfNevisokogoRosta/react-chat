import { useState } from 'react';
import BurgerButton from './ui/BurgerButton.tsx';
import { AccountComponent } from './TopBar/AccountComponent.tsx';
import { AnimatePresence, motion } from 'framer-motion';
import NavBar from './Home/NavBar.tsx';

const MobileMenu = () => {
  const [isActive, setIsActive] = useState(false);
  const burgerHandler = () => {
    setIsActive((state) => !state);
  };
  return (
    <div className="sticky top-[52px] sm:hidden z-40">
      <div className="flex justify-between items-center bg-blue-main z-40">
        <BurgerButton active={isActive} onClick={burgerHandler} />
        <AccountComponent />
      </div>

      <AnimatePresence mode="wait" initial={false}>
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ durations: 0.3 }}
            className="fixed w-screen h-screen bg-blue-main top-0 left-0 z-40 py-[52px] container flex flex-col gap-4"
          >
            <BurgerButton active={isActive} onClick={burgerHandler} />
            <div className="flex flex-col gap-4">
              <NavBar />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
