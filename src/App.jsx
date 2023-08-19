import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Theme1 from "./components/Theme/Theme1";
import Theme2 from "./components/Theme/Theme2";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/theme1' element={<Theme1 />}/>
        <Route path='/theme2' element={<Theme2 />}/>
      </Routes>
    </Router>
  );
}

export default App;
