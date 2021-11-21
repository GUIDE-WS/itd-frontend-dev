import React from "react";

export const ServiceComponent = props => {
    let {serviceUrl} = props;
    return (
        <div className='content'>
            <iframe className='service-frame' src={serviceUrl}></iframe>
        </div>
    )
};