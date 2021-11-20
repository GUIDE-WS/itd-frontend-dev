import React from "react";
import logo from '../sources/logo.png'
import {ButtonsList} from "./ButtonsList";


export const SideBar = ({buttons}) => {
    return (
        <>
            <div>
                <img src={logo} alt="Логотип SberPrime"/>
            </div>
            <ButtonsList buttons={buttons}/>
        </>
    )
}