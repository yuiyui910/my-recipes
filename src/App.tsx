import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Top } from "features/top";

function App() {
  return (
    <BrowserRouter basename="/my-recipes">
      <Routes>
        <Route path="/" element={<Top />} />
        {/* ここにパスを追加していく */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
