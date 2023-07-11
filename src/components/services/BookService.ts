import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react"
import {IBookResponse} from "../types/types"

export const BookApi = createApi({
    reducerPath: 'bookAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://www.googleapis.com/' }),
    endpoints: (build) => ({
      fetchAllBooks: build.query<IBookResponse, number>({
        query: (limit: number = 30) => ({
          url: '/books/v1/volumes',
          params: {
            q: 'typescript',
            maxResults: limit,
            key: 'AIzaSyCVbhdTqvPKrr5E5-Q-8UljT76Ie9uUB2M'
          },
        }),
      }),
    }),
  });
