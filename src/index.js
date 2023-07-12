import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './bootstrap/css/bootstrap.css'
import './bootstrap/css/bootstrap-grid.css'
import './bootstrap/css/bootstrap-reboot.css'
import Preloader from './Preloader.js'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from "./pages/Nav.js";
import Home from "./pages/Home.js";
import Workouts from "./pages/Workouts.js";
import Goals from "./pages/Goals.js";
import Coach from "./pages/Coach.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/*<Preloader/>*/}
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Nav/>}>
                  <Route index element={<Home/>}></Route>
                  <Route path="workouts" element={<Workouts/>}></Route>
                  <Route path={"goals"} element={<Goals/>}></Route>
                  <Route path={"coach"} element={<Coach/>}></Route>
              </Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
