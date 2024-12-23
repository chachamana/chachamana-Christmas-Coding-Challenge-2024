// RTK Query => easier data fetching ,  caching , manage states
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define API service  (using a base URL and expected endpoints )
const baseURL = "http://localhost:8080";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }), // Base URL

   // タグの種類を定義
   tagTypes: ['transaction', 'categories'],

  endpoints: (builder) => ({

    /********************************
     RTK Query's Method: builder.query (fetch Data)
     ********************************/

    //fetch categories (generate "useGetCategoriesQuery")
    getCategories: builder.query({
      query: () => "/api/categories", // GET Request (http://localhost:8080/api/categories)
      providesTags:["categories"]
    }),

    //fetch labels (generate "useGetLabelsQuery ")
    getLabels: builder.query({
      query: () => "/api/labels", // GET Request (http://localhost:8080/api/categories)
      providesTags:["transaction"] //used for builder.query ( add tag)
    }),

    /********************************
    builder.mutation = create, update ,delete
    **********************************/

    // Add a new transaction (generate "useAddTransactionMutation")
    addTransaction: builder.mutation({
      query: (initialTransaction) => ({
        url: "/api/transaction", //POST Request (http://localhost:8080/api/transaction )
        method: "POST",
        body: initialTransaction,  // Send transaction data to server
      }),
      invalidatesTags:["transaction"] //RTK Query refreshes the associated cached data.

    }),

    // Delete a transaction (generate "useDeleteTransactionMutation")
    deleteTransaction: builder.mutation({
      query: (recordid) => ({
        url: "/api/transaction", // DELETE Request  (http://localhost:8080/api/transaction )
        method: "DELETE",
        body: recordid,  // Send record ID for deletion
      }),
      invalidatesTags:["transaction"]
    }),
  }),
});

// Export hooks for each endpoint
export const {
  useGetCategoriesQuery,
  useGetLabelsQuery,
  useAddTransactionMutation,
  useDeleteTransactionMutation,
} = apiSlice;

/* RTK Query offer auto-generated react fook.
example :
"useGetCategoriesQuery"
・call "getCategories"
・return
data: fetched data (if successed)
isLoading :
isSuccess:
isError: request failed?

usage :
import { useGetCategoriesQuery } from './apiSlice';
const Categories = () => {
  const { data, isLoading, isError } = useGetCategoriesQuery();
*/
