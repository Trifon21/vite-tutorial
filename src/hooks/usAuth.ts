import {useContext} from "react";
import {AuthContext} from "../AuthContext.tsx";

export function useAuth(){
    return useContext(AuthContext);
}