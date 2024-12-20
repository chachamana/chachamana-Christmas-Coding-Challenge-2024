import { configureStore } from '@reduxjs/toolkit';
import expenseSlice  from './reducer';
import { apiSlice } from './apiSlice';


export const store = configureStore({
  reducer: {
    expense:expenseSlice,
    //add apiSlice' s reducer
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  // add apiSlice's middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})

