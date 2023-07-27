import React, { useContext } from "react";

import backgroundImage from "../../assets/images/background.png";
import darkBackgroundImage from "../../assets/images/dark-background.jpg";
import { searchMessage } from "../../constants/constantsText";
import { BookContext } from "../../contexts/bookContext";
import SearchForm from "./SearchForm";

const Header: React.FC = () => {
  const bookContext = useContext(BookContext);

  if (!bookContext) {
    return null;
  }

  const { setIsDarkMode, isDarkMode } = bookContext;

  const handleClick = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header
      className={`relative flex min-h-[260px] flex-col items-center justify-center overflow-hidden p-2 px-5 shadow-md`}
    >
      <img
        src={isDarkMode ? darkBackgroundImage : backgroundImage}
        alt="Background"
        className="absolute inset-0 h-full w-full object-cover "
      />
      <div className="absolute left-0 top-0 h-full w-full bg-black opacity-40 "></div>
      <h1 className="z-10 mb-5 text-4xl font-bold text-white opacity-90">
        {searchMessage}
      </h1>
      <SearchForm />
      <button
        className={`absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full ${
          isDarkMode ? "bg-gray-700" : "bg-white"
        } transition-colors duration-300`}
        onClick={handleClick}
      >
        {isDarkMode ? (
          <i className="fas fa-sun text-yellow-500"></i>
        ) : (
          <i className="fas fa-moon text-gray-800"></i>
        )}
      </button>
    </header>
  );
};

export default Header;
