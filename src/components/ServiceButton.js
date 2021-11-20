import React from "react";
import {Link} from "react-router-dom";

export const ServiceButton = ({serviceName, serviceLogo}) => {
    return (
        <>
            <img src={serviceLogo}/>
            <Link to={serviceName}>Перейти</Link>
        </>
    )
}