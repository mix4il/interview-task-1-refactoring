import React from 'react';
import ReactDOM from 'react-dom/client'
import App from "./App.jsx";


const app = document.getElementById('root')

if (app) {
    ReactDOM.createRoot(app).render(
        <App />
    )
}
