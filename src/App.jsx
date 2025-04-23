import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./components/Login";
import Right from "./components/right";

function App() {
  return (
    <div className="layout">
      <Login />
      <Right />
    </div>
  );
}

export default App;
