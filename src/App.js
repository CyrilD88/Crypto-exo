import React, { useEffect, useState } from "react";
import Headerinfos from "./components/Headerinfos";
import GlobalChart from "./components/GlobalChart";
import axios from "axios";

const App = () => {
  const [coinsData, setCoinsData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C200d%2C1y"
      )
      .then((res) => setCoinsData(res));
  }, []);
  return (
    <div className="app-container">
      <header>
        <Headerinfos />
        <GlobalChart coinsData={coinsData} />
      </header>
    </div>
  );
};

export default App;
