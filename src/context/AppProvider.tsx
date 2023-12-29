;
import React, { createContext, useState, useContext } from "react";
interface AppContextType {
  sideMenuOpen?: boolean;
  toggleSideMenu?: () => void;
  toggleModal?: () => void;
  scrollDirection?: string;
  setScrollDirection?: React.Dispatch<React.SetStateAction<string>> | undefined;
  showSidebar?: boolean;
  setShowSidebar?: React.Dispatch<React.SetStateAction<boolean>>
  showSidebarWishlist?: boolean;
  setShowSidebarWishlist?: React.Dispatch<React.SetStateAction<boolean>>;
  openWishlist?: boolean;
  setOpenWishlist: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  openCart: boolean;
  setModalId: React.Dispatch<React.SetStateAction<string>>;
  modalId: string;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const useGlobalContext = () => {
  return useContext(AppContext) as AppContextType
}

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [sideMenuOpen, setSideMenuOpen] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalId, setModalId] = useState<string>("");
  const [scrollDirection, setScrollDirection] = useState("up");
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [openCart, setOpenCart] = useState<boolean>(false);
  const [showSidebarWishlist, setShowSidebarWishlist] =
    useState<boolean>(false);
  const [openWishlist, setOpenWishlist] = useState<boolean>(false);
  const toggleSideMenu = () => {
    setSideMenuOpen(!sideMenuOpen);
  };
  const toggleModal = () => {
    setOpenModal(!openModal);
  };
  const contextValue: AppContextType = {
    sideMenuOpen,
    toggleSideMenu,
    scrollDirection,
    setScrollDirection,
    showSidebar,
    setShowSidebar,
    openCart,
    setOpenCart,
    toggleModal,
    openModal,
    setOpenModal,
    modalId,
    setModalId,
    showSidebarWishlist,
    setShowSidebarWishlist,
    openWishlist,
    setOpenWishlist,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
