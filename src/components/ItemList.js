import React from "react";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-gray-300 text-left">
          <div className="flex justify-between">
            <div className="py-2 w-10/12">
              <span className="">{item.card.info.name}</span>
              <span className="p-2"> ₹{item.card.info.price}</span>
              <p className="text-xs py-2">{item.card.info.description}</p>
            </div>
            <div className="w-2/12 p-4">
              <div className="absolute">
                <button className="p-2 shadow-lg rounded text-white bg-black">
                  Add +{" "}
                </button>
              </div>
              <img
                alt="dish-image"
                className="rounded"
                src={CDN_URL + item.card.info.imageId}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
