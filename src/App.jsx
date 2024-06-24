import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import ShowPerson from "./components/ShowPerson";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowPerson></ShowPerson>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
