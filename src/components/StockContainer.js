import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, addToPortfolio, portfolio}) {
  
  // console.log(stocks)

  const stocksList = stocks.map(stock => {
    return (
      <Stock key={stock.id} stock={stock} onChangePortfolio={addToPortfolio} portfolio={portfolio}/>
    )
  })

  return (
    <div>
      <h2>Stocks</h2>
      {stocksList}
    </div>
  );
}

export default StockContainer;
