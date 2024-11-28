import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showList, onClickCategory }) => {
  
  return (
    <div className="w-6/12 bg-gray-50 shadow-lg mx-auto my-4 py-4 cursor-pointer" onClick={onClickCategory}>
      <div className="flex justify-between">
        <span className="font-bold text-xl">
          {data.title} ({data?.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {showList && <ItemList items={data?.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
