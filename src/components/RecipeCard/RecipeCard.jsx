import "./RecipeCard.scss";

function RecipeCard({ data }) {
  return (
    <article className="card">
      <img
        className="card__image"
        src={data.image}
      />
      <div className="card__info">
        <p className="card__title">{data.title}</p>
      </div>
    </article>
  );
}

export default RecipeCard;
