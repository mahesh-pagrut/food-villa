import React, { useContext, useEffect, useState } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000); // 5 seconds delay

    return () => clearTimeout(timer); // cleanup
  }, []);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {loading || !food_list || food_list.length === 0 ? (
          <div className="loading-lottie">
            <DotLottieReact
              src="https://lottie.host/a9cfd994-3472-45fc-a1d5-e4e304bec762/6OfLqdXF9q.lottie"
              loop
              autoplay
            />
            <p className="loading-text">Simmering something delicious for you...</p>
          </div>
        ) : (
          food_list.map((item) =>
            category === "All" || category === item.category ? (
              <FoodItem
                key={item._id}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            ) : null
          )
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;
