import SearchComponent from "./Search";
import { restaurants } from "../common/restaurants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

// Hooks --- JS Function "use"

const BodyComponent = () => {
  const [filteredRestaurantsArray, setFilteredRestaurants] =
    useState(restaurants);
  function filteredRestaurants(restaurants) {
    setFilteredRestaurants(restaurants);
  }
  console.log(filteredRestaurantsArray);

  const handleTopRated = () => {
    let toprated = filteredRestaurantsArray.filter((r) => {
      return r.avgRating > 4;
    });
    setFilteredRestaurants(toprated);
  };
  const renderRestaurants = () => {
    if (filteredRestaurantsArray.length === 0) {
      return <p>No restaurants found.</p>;
    }

    return filteredRestaurantsArray.map((restaurant) => (
      <RestaurantCard key={restaurant.id} res_details={restaurant} />
    ));
  };
  return (
    <>
      <div className="filter-search-bar">
        <SearchComponent filteredRestaurants={filteredRestaurants} />
        <button className="top-rated" onClick={handleTopRated}>
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">{renderRestaurants()}</div>
    </>
  );
};

export default BodyComponent;
