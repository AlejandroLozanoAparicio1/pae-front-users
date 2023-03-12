import { createContext, useState } from 'react';
import HamburgerMenuContextType from '../utils/types/HamburguerMenuContextType';

export const HamburgerMenuContext = createContext<HamburgerMenuContextType | null>(null);

interface ContextChildrenType {
  children: React.ReactNode;
}

const HamburgerMenuProvider: React.FC<ContextChildrenType> = ({ children }: any) => {
  const [hamburgerMenu, setHamburgerMenu] = useState<boolean>(false);

  return (
    <HamburgerMenuContext.Provider
      value={{ hamburgerMenu: hamburgerMenu, setHamburgerMenu: setHamburgerMenu }}
    >
      {children}
    </HamburgerMenuContext.Provider>
  );
};

export default HamburgerMenuProvider;
