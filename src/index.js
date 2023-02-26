import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Header from "./components/Header";
import Events from "./components/Events";
import Events2 from "./components/Events2";
import Events3 from "./components/Events3";
import Events4 from "./components/Events4.tsx";
import Events5 from "./components/Events5";
import Event from "./components/Event.js";
import Footer from "./components/Footer.js";

import {
  BrowserRouter,
  Routes,
  Router,
  Route,
  Outlet,
  Link,
} from "react-router-dom";
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<App />} />
        {/* <Route element={<PrivateRoute />}>
          {/* hier sind alle protected routes*/}
        {/* <Route element={<Dashboard />} path="/dashboard" /> */}
        {/* <Route element={<Dashboard />} path="/dashboard" /> */}
        {/* </Route> */}
        {/* <Route path="/" exact element={<Home />} /> */}
        <Route path="/event" element={<Event />} />
        {/* <Route path="*" element={<h1>404 – Seite nicht gefunden</h1>} /> */}
      </Routes>
      {/* <Footer /> */}
      {/* <Events5 /> */}
    </BrowserRouter>

    {/* <Events /> */}
    {/* <Events2 /> */}
    {/* <Events3 /> funktioniert*/}
    {/* <Events4 /> */}
  </>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
