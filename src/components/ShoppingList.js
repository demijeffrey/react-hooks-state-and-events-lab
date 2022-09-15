import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState('All')

  function handleChange(e) {
    //if selectedCategory === e.target.value => only show foods in that category
    // console.log(e.target.value)
    setSelectedCategory(e.target.value)

    // console.log(selectedCategory)
  }
  let newItems = items.filter(item => selectedCategory === "All" ? true : item.category === selectedCategory)

  return (
    <div className="ShoppingList">
      <div className="Filter" onChange={handleChange}>
        <select name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {newItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
