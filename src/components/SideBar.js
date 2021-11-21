import React from "react";
import logo from '../sources/logo.png'
import {ButtonsList} from "./ButtonsList";


export const SideBar = ({buttons}) => {
    return (
        <div className='sidebar'>
            <header>
                <a href="#" className="switch-btn">&#9776;</a>
                <img src={logo} alt="SberPrime logo"/>
            </header>
            <ButtonsList buttons={buttons}/>
        </div>
    )
}