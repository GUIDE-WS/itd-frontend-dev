import React from "react";
import './App.css';
import {SideBar} from "./components/SideBar";
import {getServices} from "./components/getServices";
import {ServiceButton} from "./components/ServiceButton";
import {Route, Routes} from "react-router-dom";


const ServiceComponent = ({serviceUrl}) => {
    return <iframe src={serviceUrl}></iframe>
}
const HomePage = () => {
    return <div>Выберите интерисующий вас сервис</div>
}

const services = getServices()

const buttons = (
    services.map(service =>
        <ServiceButton
            serviceName={service.name}
            serviceLogo={service.img}
        />
    ))

const App = () => (
    <>
        <SideBar buttons={buttons}/>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            {
                services.map(service =>
                    <Route path={service.name}
                           element={<ServiceComponent serviceUrl={service.serviceUrl}/>}/>
                )}

        </Routes>
    </>
);

export default App;
