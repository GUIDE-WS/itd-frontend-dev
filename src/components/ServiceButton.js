import React from "react";
import {useNavigate} from "react-router-dom";
import '../styles/style.css'

export const ServiceButton = ({serviceName, serviceLogo}) => {
    const navigate = useNavigate()
    return (
        <button onClick={() => {
            navigate(serviceName)
        }}>
            <img src={serviceLogo}/>
        </button>
    )
}