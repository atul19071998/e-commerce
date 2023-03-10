import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import {BrowserRouter as Router} from "react-router-dom";
 
import {ContextDataProvider} from './Context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <ContextDataProvider>
    <Router>
    <App />
    </Router>
    </ContextDataProvider>
  
);

 
reportWebVitals();
