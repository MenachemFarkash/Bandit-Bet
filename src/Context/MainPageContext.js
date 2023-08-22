import jwt_decode from "jwt-decode";
import { createContext, useState } from "react";
export const MainContext = createContext();

const MainContextProvider = (props) => {
    const { children } = props;

    const getUserId = () => {
        const userId = jwt_decode(localStorage.getItem("userToken")).userId;
        console.log(userId);
    };

    const getUserInfo = () => {
        console.log("user info requested");
    };

    return <MainContext.Provider value={{}}>{children}</MainContext.Provider>;
};

export default MainContextProvider;
