import "./RecipeSteps.scss";
import { useState, useEffect } from "react";
import { baseURL, apiKey } from "../../utils/api";
import axios from "axios";

function RecipeSteps({ recipeId }) {
  const [recipeSteps, setRecipeSteps] = useState(null);

  useEffect(() => {
    const url = `${baseURL}/${recipeId}/analyzedInstructions?apiKey=${apiKey}`;
    const fetchRecipeSteps = async () => {
      try {
        const response = await axios.get(url);
        setRecipeSteps(response.data[0].steps);
        console.log(recipeSteps);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRecipeSteps();
  }, [recipeId]);

  if (recipeSteps === null) {
    return <>Loading...</>;
  }

  return (
    <section className="steps">
      <h1 className="steps__title">Cooking Instructions</h1>
      {recipeSteps.map((step) => (
        <article className="steps__step" key={step.number}>
          <div className="steps__order">
            <h3 className="steps__number">{step.number}</h3>
          </div>
          <div className="steps__instructions">
            <p className="steps__text">{step.step}</p>
          </div>
        </article>
      ))}
    </section>
  );
}

export default RecipeSteps;
