import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Deal_Page from "./Pages/Deal_Page";
import Details_Page from "./Pages/Details_Page";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
     <Route path="deals" index element={<Deal_Page />}/> 
     <Route path="details" element={<Details_Page />} />
    </Routes>
  </BrowserRouter>
);
