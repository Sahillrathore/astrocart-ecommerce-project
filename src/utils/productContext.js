import { createContext, useContext } from "react";

export const productContext = createContext()

export const productContextProvider = productContext.Provider;

const useProducts = () => {
    return useContext(productContext);
}

export default useProducts;