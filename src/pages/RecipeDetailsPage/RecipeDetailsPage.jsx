import "./RecipeDetailsPage.scss";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import { baseURL, apiKey } from "../../utils/api";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import IngredientsList from "../../components/IngredientsList/IngredientsList";
import HealthInfo from "../../components/HealthInfo/HealthInfo";
import RecipeSteps from "../../components/RecipeSteps/RecipeSteps";

function RecipeDetailsPage() {
  const [recipeDetails, setRecipeDetails] = useState(null);
  const { recipeId } = useParams();

  useEffect(() => {
    const url = `${baseURL}/${recipeId}/information?apiKey=${apiKey}`;
    const fetchRecipeDetails = async () => {
      try {
        const response = await axios.get(url);
        setRecipeDetails(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRecipeDetails();
  }, [recipeId]);

  if (recipeDetails === null) {
    return <>Loading...</>;
  }

  return (
    <section className="recipe-details">
      <RecipeCard data={recipeDetails} />
      <HealthInfo data={recipeDetails} />
      <IngredientsList data={recipeDetails.extendedIngredients} />
      <RecipeSteps recipeId={recipeId} />
    </section>
  );
}

export default RecipeDetailsPage;
