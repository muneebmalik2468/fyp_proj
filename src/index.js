import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomecontextProvider from './Context/Homecontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <HomecontextProvider>
<App/>

 </HomecontextProvider>
);


reportWebVitals();
