import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// RTK Query => easier data fetching ,  caching , manage states



// Define a service using a base URL and expected endpoints
const baseURL="http://localhost:8080";

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl:baseURL}),
    endpoints: (builder) => ({
      getCategories:builder.query({
        //get http://localhost:8080/api/categories
        query: () => '/api/categories',
      }),
    }),
  })

  //useGetCategoriesQuery (RTK prepares  auto-generated react fook  based on the 'endpoints')
  export const { useGetCategoriesQuery } = apiSlice;
//or,  export default apiSlice;
