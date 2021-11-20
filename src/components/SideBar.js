import React from "react";
import logo from '../sources/logo.png'
import {ButtonsList} from "./ButtonsList";


export const SideBar = ({buttons}) => {
    return (
        <>
            <img src={logo}/>
            <ButtonsList buttons={buttons}/>
        </>
    )
}