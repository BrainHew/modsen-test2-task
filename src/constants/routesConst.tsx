import BookDetails from "../components/Book/BookDetails";
import BookList from "../components/Book/BookList";
import PageNotFound from "../components/Error/ErrorNotFound";
import { BookRoutes } from "./constantsText";

export const routes = [
  {
    path: BookRoutes.BookList,
    element: <BookList />,
  },
  {
    path: BookRoutes.BookDetails,
    element: <BookDetails />,
  },
  {
    path: BookRoutes.NotFound,
    element: <PageNotFound />,
  },
];
