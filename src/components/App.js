import React, { Component, useState } from "react";
import "../styles/App.css";
import ProjectDesp from "./ProjectDesp";
import ProjectName from "./ProjectName";

const App = () => {
  return (
    <div id="main">
      <ProjectName />
      <ProjectDesp />
    </div>
  );
};

export default App;
