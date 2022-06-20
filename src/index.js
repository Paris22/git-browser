import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter
} from "react-router-dom";
import './index.css';
import {GlobalStyle} from "./configs/global.styled";
import App from "./App";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <GlobalStyle/>
            <App/>
        </React.StrictMode>
    </BrowserRouter>
);
