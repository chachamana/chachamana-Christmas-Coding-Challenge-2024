import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// RTK Query => easier data fetching ,  caching , manage states


// Define API service  (using a base URL and expected endpoints )
const baseURL="http://localhost:8080";

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl:baseURL}), // Base URL
    endpoints: (builder) => ({
      getCategories:builder.query({
        //get http://localhost:8080/api/categories // Request URL
        query: () => '/api/categories',
      }),
    }),
  })

//useGetCategoriesQuery (auto-generated react fook) call "getCategories" and fetch data
/*   return
data: fetched data
isFetching: loading?
isSuccess: request successed ?
isError: request failed? */

export const { useGetCategoriesQuery } = apiSlice;
