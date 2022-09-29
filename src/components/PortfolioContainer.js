import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolio, removeFromPortfolio}) {

  // console.log(portfolio)

  const portfolioList = portfolio.map(portfolioStock => {
    return (
      <Stock key={portfolioStock.id} stock={portfolioStock} portfolio={portfolio} onChangePortfolio={removeFromPortfolio}/>
    )
  })

  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioList}
    </div>
  );
}

export default PortfolioContainer;
