import Hero from "../../components/Hero/Hero";
import RecipeList from "../../components/RecipeList/RecipeList";
import "./HomePage.scss";
import { useState } from "react";

function HomePage() {
  const [activeType, setActiveType] = useState(null);

  return (
    <>
      <Hero />
      <RecipeList activeType={activeType} />
    </>
  );
}

export default HomePage;
