import { useLocation, Link } from "react-router-dom";
import "./Header.scss";
import SearchBar from "../SearchBar/SearchBar";

function Header({setActiveType, setSearchResults}) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header className={`header ${isHomePage ? "" : "header-alt"}`}>
      <Link to={"/"} className="header__link">
        <h1 className="header__logo">Forked</h1>
      </Link>
      {isHomePage ? (
        <SearchBar setActiveType={setActiveType} setSearchResults={setSearchResults}/>
      ) : (
        <Link to={"/"} className="header__home-link">
          <div className="header__back">
            <svg
              width="21"
              height="15"
              viewBox="0 0 21 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="header__arrow"
                d="M0.292892 6.7929C-0.0976315 7.18342 -0.0976314 7.81658 0.292893 8.20711L6.65686 14.5711C7.04738 14.9616 7.68054 14.9616 8.07107 14.5711C8.46159 14.1805 8.46159 13.5474 8.07107 13.1569L2.41421 7.5L8.07107 1.84315C8.46159 1.45262 8.46159 0.819458 8.07107 0.428933C7.68054 0.038409 7.04738 0.038409 6.65685 0.428933L0.292892 6.7929ZM21 6.5L1 6.5L1 8.5L21 8.5L21 6.5Z"
              />
            </svg>
            <p className="header__home">Home</p>
          </div>
        </Link>
      )}
    </header>
  );
}

export default Header;
