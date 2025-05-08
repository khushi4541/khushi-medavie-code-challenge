import "./IngredientsList.scss";

function IngredientsList({ data }) {
  return (
    <article className="ingredients">
      <h1 className="ingredients__title">Ingredients</h1>
      <div className="ingredients__container">
        {data.map((ingredient) => (
          <div className="ingredients__div">
            <p className="ingredients__name">○ {ingredient.original}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

export default IngredientsList;
