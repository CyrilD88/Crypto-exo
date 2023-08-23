import React from "react";
import Headerinfos from "./components/Headerinfos";
import GlobalChart from "./components/GlobalChart";

const App = () => {
  return (
    <div className="app-container">
      <header>
        <Headerinfos />
        <GlobalChart />
      </header>
    </div>
  );
};

export default App;
