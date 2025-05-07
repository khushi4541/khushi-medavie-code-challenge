import "./SearchBar.scss";

function SearchBar() {
  return (
    <div className="search">
      <input
        type="text"
        className="search__input"
        placeholder="Find Recipes..."
      />
      <button className="search__button">Search</button>
    </div>
  );
}

export default SearchBar;
