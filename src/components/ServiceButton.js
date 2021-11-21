import React from "react";
import {useNavigate} from "react-router-dom";

export const ServiceButton = ({serviceName, serviceLogo}) => {
    const navigate = useNavigate()
    return (
        <button className='server-btn' onClick={() => {
            navigate(serviceName)
        }}>
            <img src={serviceLogo} alt='service logo'/>
        </button>
    )
}