import "./FilterPanel.scss";
import FilterTags from "../FilterTags/FilterTags";

function FilterPanel({ activeType, setActiveType }) {
    return (
      <section className="filter">
        <h3 className="filter__title">Filter by Cusine</h3>
        <FilterTags activeType={activeType} setActiveType={setActiveType} />
      </section>
    );
  }
  
  export default FilterPanel;
  