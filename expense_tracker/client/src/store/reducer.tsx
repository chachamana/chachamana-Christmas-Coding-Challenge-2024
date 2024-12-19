import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  transaction: [],
};

export const expenseSlice = createSlice({
  name: "expense", //slice name
  initialState: {},
  reducers: { //define action
    getTransactions: (state) => {
        //get code
    },
  },
});

//getTransactions = expenseSlice.actions.getTransactions;
export const { getTransactions } = expenseSlice.actions;

export default expenseSlice.reducer;