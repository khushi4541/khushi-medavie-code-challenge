import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import RecipeDetailsPage from "./pages/RecipeDetailsPage/RecipeDetailsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import { useState } from "react";

function App() {
  const [activeType, setActiveType] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Header
          setActiveType={setActiveType}
          setSearchResults={setSearchResults}
        />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                setActiveType={setActiveType}
                activeType={activeType}
                searchResults={searchResults}
                setSearchResults={setSearchResults}
              />
            }
          />
          <Route path="/recipes/:recipeId" element={<RecipeDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
