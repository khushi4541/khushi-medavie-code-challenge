import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import RecipeDetailsPage from "./pages/RecipeDetailsPage/RecipeDetailsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipes/:recipeId" element={<RecipeDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
