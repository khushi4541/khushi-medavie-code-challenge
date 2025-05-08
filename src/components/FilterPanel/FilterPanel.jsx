import "./FilterPanel.scss";
import FilterTags from "../FilterTags/FilterTags";

function FilterPanel({ activeType, setActiveType, setSearchResults }) {
  return (
    <section className="filter">
      <h3 className="filter__title">Filter by Cusine</h3>
      <FilterTags
        activeType={activeType}
        setActiveType={setActiveType}
        setSearchResults={setSearchResults}
      />
    </section>
  );
}

export default FilterPanel;
