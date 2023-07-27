import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { noImage } from "../../../constants/constantsText";
import { BookContext } from "../../../contexts/bookContext";
import { useBookDetails } from "../../../hooks/useBookDetails";
import Error from "../../Error/ErrorLoadBook";
import Loader from "../../Loader";

const BookDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { bookData, isLoading } = useBookDetails(id ?? "");
  const bookContext = useContext(BookContext);

  if (!bookContext) {
    return null;
  }

  const { isDarkMode } = bookContext;

  if (isLoading) {
    return <Loader />;
  }

  if (!bookData) {
    return <Error />;
  }

  const { title, authors, categories, description, imageLinks } =
    bookData.volumeInfo;
  const formattedCategories = categories?.length
    ? `Category: ${categories.join(", ")}`
    : "No category";
  const image = imageLinks?.large ?? "";

  return (
    <section
      className={`flex flex-col p-4 md:flex-row md:p-0 ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="flex items-center justify-center md:w-1/2 md:p-8">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-2/3 rounded-lg object-cover shadow-2xl md:mr-8"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center rounded-lg bg-gray-100 shadow-2xl">
            <span className="text-gray-600">{noImage}</span>
          </div>
        )}
      </div>
      <div className="md:w-1/2 md:p-8">
        <h2
          className={`mt-4 text-2xl font-bold ${
            isDarkMode ? "text-white" : "text-gray-800"
          }`}
        >
          {title}
        </h2>
        <div className={`mb-4 text-gray-600 ${isDarkMode ? "text-white" : ""}`}>
          By {authors?.join(", ")}
        </div>
        <div className={`mb-4 text-gray-600 ${isDarkMode ? "text-white" : ""}`}>
          {formattedCategories}
        </div>
        <div className={`text-gray-600 ${isDarkMode ? "text-white" : ""}`}>
          {description}
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
