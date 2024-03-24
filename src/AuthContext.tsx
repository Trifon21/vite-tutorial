import {createContext, PropsWithChildren, useState} from "react";
import {IContext} from "./types.ts";

export const AuthContext = createContext<IContext>({
    isLoggedIn: false,
    setIsLoggedIn: null
})

export const AuthProvider = ({children} : PropsWithChildren) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return <AuthContext.Provider value={{
                    isLoggedIn,
                    setIsLoggedIn
                }}
    >
        {children}
    </AuthContext.Provider>
}