import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ExploratoryTesting} from "./pages/ExploratoryTesting";
import {Interactions} from "./pages/Interactions";
import {NoPage} from "./pages/NoPage";
import {Entities} from "./pages/Entities";
import {States} from "./pages/States";
import {Ecosystem} from "./pages/Ecosystem";
import {Summary} from "./pages/Summary";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/exploratoryTesting" element={<ExploratoryTesting/>}/>
                <Route path="/interactions" element={<Interactions/>}/>
                <Route path="/objects" element={<Entities/>}/>
                <Route path="/states" element={<States/>}/>
                <Route path="/environment" element={<Ecosystem/>}/>
                <Route path="/summary" element={<Summary/>}/>
                <Route path="*" element={<NoPage/>}/>
                <Route path="/error" element={<NoPage/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
