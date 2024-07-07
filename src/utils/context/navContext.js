import { createContext, useContext } from "react";

export const navContext = createContext();

export const Navprovider = navContext.Provider;

const useNavContext = () => {
    return useContext(navContext);
}

export default useNavContext;