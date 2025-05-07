import "./RecipeList.scss";
import { apiKey, baseURL } from "../../utils/api";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "../RecipeCard/RecipeCard";

function RecipeList({activeType}) {
  const [recipeData, setRecipeData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchRecipeData = async () => {
      const url = `${baseURL}/complexSearch?number=30&apiKey=${apiKey}${
      activeType ? `&cuisine=${activeType}` : ""}`;
      try {
        const response = await axios.get(url);
        setRecipeData(response.data.results);
        setCurrentPage(1);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRecipeData();
  }, [activeType]);

  //pagination logic
  const itemsPerPage = 6;
  const totalPages = Math.ceil(recipeData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentRecipes = recipeData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="recipe-list">
      <div className="recipe-list__container">
        {currentRecipes.map((data) => (
          <Link
            to={`/recipes/${data.id}`}
            key={data.id}
            className="recipe-list__link"
          >
            <RecipeCard data={data} />
          </Link>
        ))}
      </div>

      <div className="recipe-list__pagination">
        <button onClick={handlePrevious} disabled={currentPage === 1}>
          ← Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageClick(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}

        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next →
        </button>
      </div>
    </section>
  );
}

export default RecipeList;
