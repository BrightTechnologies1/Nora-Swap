import React from "react";
import "./App.less";
import GitHubButton from "react-github-btn";
import { Routes } from "./routes";
import { EllipsisOutlined } from "@ant-design/icons";

function App() {
  return (
    <div className="App">
      <div className="Banner">
        
        <div className="GradientOne"></div>
        <div className="GradientTwo"></div>
        <div className="GradientThree"></div>
        <div className="GradientFour"></div>
        <div className="GradientFive"></div>
        <div className="GradientSix"></div>
        <div className="GradientSeven"></div>
        <div className="GradientEight"></div>
        
       
      </div>

      <Routes />
      
      
    </div>
  );
}

export default App;
