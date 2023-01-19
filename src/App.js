import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Main from "./pages/Main";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/Login" element={<Login />}></Route>
        </Routes>
      </Router>
    </div>

    );
}

export default App;
