import { createContext, useContext } from "react";

export const isLogin = createContext();

export const LoginProvider = isLogin.Provider;

const useIsLogin = () => {
    return useContext(isLogin);
}

export default useIsLogin;