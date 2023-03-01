import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Header2 from "./components/Header2_test";
import Header from "./components/Header.tsx";
import Events_test from "./components/Events_test";
import Events2 from "./components/Events2";
import Events3 from "./components/Events3";
import Events4 from "./components/Events4.tsx";
import Events from "./components/Events";
import Event from "./components/Event.js";
import Footer from "./components/Footer.js";
import Contact from "./components/Contact.js";
import Home from "./components/Home.js";
import Info from "./components/Info.js";

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
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/info" element={<Info />} />
        <Route path="/events" element={<Events />} />
        <Route path="/event" element={<Event />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
