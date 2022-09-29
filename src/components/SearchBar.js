import React, {useState} from "react";

function SearchBar({ stocks, setStocks, setFilterType, filterType }) { 
  const [alphabeticallyCheckbox, setAlphabeticallyCheckbox] = useState(false)
  const [priceFilterCheckbox, setPriceFilterCheckbox] = useState(false)

  function alphabeticallyFilter() {
    setPriceFilterCheckbox(false)
    setAlphabeticallyCheckbox(true)
    const sortStocks = [...stocks].sort((a, b) =>
    a.ticker > b.ticker ? 1 : -1,
    )
    console.log(sortStocks)
    setStocks(sortStocks)
  }


  function filterByPrice() {
    setAlphabeticallyCheckbox(false)
    setPriceFilterCheckbox(true)
    const sortStocks = [...stocks].sort((a, b) => a.price - b.price);
    console.log(sortStocks);
    setStocks(sortStocks)
  }

  function filterDropDown(e) {
    // console.log(e.target.value)
    setFilterType(e.target.value)
  }


  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={alphabeticallyCheckbox}
          onChange={alphabeticallyFilter}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={priceFilterCheckbox}
          onChange={filterByPrice}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select value={filterType} onChange={filterDropDown}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
