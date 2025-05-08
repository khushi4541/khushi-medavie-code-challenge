import "./RecipeCard.scss";
import { useLocation } from "react-router-dom";

function RecipeCard({ data }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      {isHomePage ? (
        <article className="card">
          <img className="card__image" src={data.image} />
          <div className="card__info">
            <p className="card__title">{data.title}</p>
          </div>
        </article>
      ) : (
        <article className="card card-alt">
          <div className="card__info card__info-alt">
            <p className="card__title card__title-alt">{data.title}</p>
          </div>
          <img className="card__image" src={data.image} />
        </article>
      )}
    </>
  );
}

export default RecipeCard;
