import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App/>} />
        <Route path="/product" element={<App/>} />
        <Route path="/contact" element={<App/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
