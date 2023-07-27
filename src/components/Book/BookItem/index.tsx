import React, { useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { noImage } from "../../../constants/constantsText";
import { BookContext } from "../../../contexts/bookContext";
import { IBook } from "../../../types/types";
import { formatBookData } from "../../../utils/bookUtils";

interface BookItemProps {
  book: IBook;
}

const BookItem: React.FC<BookItemProps> = ({ book }) => {
  const { id, title, authors, categories, image } = useMemo(
    () => formatBookData(book),
    [book],
  );
  const formattedCategories = categories.length ? categories.join(", ") : "N/A";
  const navigate = useNavigate();
  const bookContext = useContext(BookContext);

  if (!bookContext) {
    return null;
  }

  const { isDarkMode } = bookContext;
  const handleClick = () => {
    navigate(`/${id}`);
  };

  return (
    <section
      className={`m-2 w-24 max-w-xs cursor-pointer border border-gray-300 bg-gray-50 p-2 md:m-2 md:w-1/5 md:max-w-md lg:w-1/6
       ${isDarkMode ? "border-gray-600 bg-gray-800 text-white" : ""}`}
      onClick={handleClick}
    >
      <div className="mt-4 flex items-start justify-center">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full rounded-lg object-cover shadow-2xl md:h-32 md:w-24 lg:h-40 lg:w-3/6"
          />
        ) : (
          <div
            className={`flex h-full w-full items-center justify-center rounded-lg border border-gray-300 bg-white md:h-32 md:w-24 lg:h-40 lg:w-3/6 ${
              isDarkMode ? "border-gray-700 bg-gray-800 text-white" : ""
            }`}
          >
            <span
              className={`text-center text-xs text-gray-600 md:text-base ${
                isDarkMode ? "text-white" : ""
              }`}
            >
              {noImage}
            </span>
          </div>
        )}
      </div>
      <div
        className={`mt-2 break-words text-sm text-gray-600 underline md:text-base ${
          isDarkMode ? "text-white" : ""
        }`}
      >
        {formattedCategories}
      </div>
      <div
        className={`mb-2 mt-4 break-words text-xs font-bold md:text-base ${
          isDarkMode ? "text-white" : ""
        }`}
      >
        {title}
      </div>
      <div
        className={`mb-2 break-words text-xs text-gray-600 md:text-base ${
          isDarkMode ? "text-white" : ""
        }`}
      >
        By {authors.join(", ")}
      </div>
    </section>
  );
};

export default BookItem;
