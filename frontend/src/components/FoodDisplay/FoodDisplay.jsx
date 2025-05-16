import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list && food_list.length > 0 ? (
          food_list.map((item) => {
            if (category === "All" || category === item.category) {
              return (
                <FoodItem
                  key={item._id}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              );
            } else {
              return null;
            }
          })
        ) : (
          <div className="loading-lottie">
            <DotLottieReact
              src="https://lottie.host/a9cfd994-3472-45fc-a1d5-e4e304bec762/6OfLqdXF9q.lottie"
              loop
              autoplay
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;
