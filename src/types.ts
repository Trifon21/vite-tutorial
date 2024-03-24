import {Dispatch, SetStateAction} from "react";

export interface IDetails{
    title : string,
    description : string,
    buttonText : string,
}

export interface IContext{
    isLoggedIn: boolean,
    setIsLoggedIn: null | Dispatch<SetStateAction<boolean>>
}

export interface ITodo{
    userId: number,
    id: number,
    title: string,
    completed: boolean
}