import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import './index.css';
import App from './App';

import reducer from "../src/store/reducer";

const store = createStore(reducer);

const app = (
    <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render( app, document.getElementById('root'));