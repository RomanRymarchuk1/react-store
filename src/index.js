import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"

import './index.css';

import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

import App from './App';
import store from './store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL + '/'} >
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </BrowserRouter>
    </Provider>
);


