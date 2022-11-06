import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss'
import 'antd/dist/antd.min.css'
import './assets/fonts.scss'
import {BrowserRouter as Router} from 'react-router-dom'
import LoadableApp from "./LoadableApp";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <LoadableApp/>
    </Router>
);
