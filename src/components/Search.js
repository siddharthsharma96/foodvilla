import { restaurants } from "../common/restaurants";

let searchText = "";

const SearchComponent = (props) => {
  function filterRestaurants(searchText) {
    let filteredRestaurants = restaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchText.toLowerCase())
    );

    props.filteredRestaurants(filteredRestaurants);

    // add filter function
  }
  const changeHandler = (e) => {
    searchText = e.target.value;

    if (searchText.trim() === "") {
      props.filteredRestaurants(restaurants);
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        onChange={changeHandler}
        className="search-text"
        placeholder="Enetr Restaurant"
        required
      ></input>
      <button onClick={(e) => filterRestaurants(searchText)}>Search</button>
    </div>
  );
};

export default SearchComponent;
