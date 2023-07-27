import React, { createContext } from "react";

import { IBook } from "../types/types";

interface BookContextType {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  books: IBook[];
  totalItems: number;
  isLoading: boolean;
  handleLoadMore: () => Promise<void>;
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BookContext = createContext<BookContextType | null>(null);
