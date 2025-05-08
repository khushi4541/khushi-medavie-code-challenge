import "./FilterTags.scss";
import cusines from "../../data/cusines.json";

function FilterTags({ activeType, setActiveType, setSearchResults }) {
  return (
    <div className="filter-tags">
      {cusines.map((tag) => {
        const isActive = activeType === tag;

        return (
          <button
            key={tag}
            onClick={() => {
              setActiveType((prevTag) => (prevTag === tag ? null : tag));
              setSearchResults([]);
            }}
            className={`filter-tags__tag ${
              isActive ? `filter-tags__tag--active` : ""
            }`}
          >
            <p className="filter-tags__name">{tag}</p>
          </button>
        );
      })}
    </div>
  );
}

export default FilterTags;
