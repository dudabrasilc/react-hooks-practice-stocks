import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [portfolio, setPortfolio] = useState([])
  const [filterType, setFilterType] = useState('Tech')
  

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
    .then(r => r.json())
    .then(stocksData => {
      // console.log(stocksData)
      // console.log(stocks)
      setStocks(stocksData)
    })
  }, [])

  function addToPortfolio(clickedStock) {
    const newArray = [...portfolio, clickedStock]
    setPortfolio(newArray)
  }


  function removeFromPortfolio(clickedStock) {
    console.log("removed stock: ", clickedStock)
    const newArray = portfolio.filter(stock => {
      return stock.id !== clickedStock.id
    })
    setPortfolio(newArray)
  }

    const newArray = stocks.filter(stock => {
      return stock.type === filterType
    })
    console.log(newArray)



  return (
    <div>
      <SearchBar stocks={stocks} setStocks={setStocks} filterType={filterType} setFilterType={setFilterType}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={newArray} addToPortfolio={addToPortfolio} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} removeFromPortfolio={removeFromPortfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
