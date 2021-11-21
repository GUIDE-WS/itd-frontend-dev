import React from "react";
import './App.css';
import './styles/style.css'
import {SideBar} from "./components/SideBar";
import {getServices} from "./components/getServices";
import {ServiceButton} from "./components/ServiceButton";
import {Route, Routes} from "react-router-dom";
import {ServiceComponent} from "./ServiceComponent";
import {HomePage} from "./HomePage";


const services = getServices()
let buttons = []
for (let service of services.then(res=>res.data)) {
    buttons.append(<ServiceButton
        serviceName={service.name}
        serviceLogo={service.body}
    />)
}

const App = () => (
    <>
        <SideBar buttons={buttons}/>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            {
                services.map(service =>
                    <Route path={service.name}
                           element={<ServiceComponent serviceUrl={service.url}/>}/>
                )}

        </Routes>
    </>
);

export default App;
