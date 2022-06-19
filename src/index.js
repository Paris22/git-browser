import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {GlobalStyle} from "./configs/global.styled";
import UpperHeader from "./Components/Upper-header/Upper-header";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <GlobalStyle/>
            <UpperHeader/>
            <App/>
        </React.StrictMode>
    </BrowserRouter>
);

reportWebVitals();
