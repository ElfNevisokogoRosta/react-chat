import { createContext, FC, ReactNode, useContext, useState } from 'react';

interface ModalContextProps {
  children: ReactNode;
}

interface ModalContextType {
  openModal: (modal: ReactNode) => void;
  closeModal: () => void;
}

const defaultValue: ModalContextType = {
  openModal: () => {},
  closeModal: () => {},
};

const ModalContext = createContext<ModalContextType>(defaultValue);

const ModalProvider: FC<ModalContextProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [modal, setModal] = useState<ReactNode>(null);
  const openModal = (modal: ReactNode) => {
    setIsVisible(true);
    setModal(modal);
  };
  const closeModal = () => {
    setIsVisible(false);
    setModal(null);
  };
  const value = {
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={value}>
      {isVisible && modal && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-gray-secondary z-50">
          {modal && isVisible ? modal : null}
        </div>
      )}

      {children}
    </ModalContext.Provider>
  );
};
export default ModalProvider;

export const useModal = () => {
  return useContext(ModalContext);
};
