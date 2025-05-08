import "./SearchBar.scss";
import axios from "axios";
import { useState } from "react";
import { baseURL, apiKey } from "../../utils/api";

function SearchBar({ setSearchResults, setActiveType }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setSearchResults([]);       
    }
  };

  const handleSearch = async () => {
    if (!query.trim()) return;

    const url = `${baseURL}/complexSearch?query=${query}&number=30&apiKey=${apiKey}`;

    try {
      const response = await axios.get(url);
      setSearchResults(response.data.results);
      setActiveType(""); 
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="search">
      <input
        type="text"
        className="search__input"
        placeholder="Find Recipes..."
        value={query}
        onChange={handleInputChange}
      />
      <button className="search__button" onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
