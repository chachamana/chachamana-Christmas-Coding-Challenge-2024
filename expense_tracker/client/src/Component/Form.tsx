import { useForm, SubmitHandler } from "react-hook-form";
import List from "./List";
import { useAddTransactionMutation } from "../store/apiSlice";

export default function Form() {
  interface IFormInput {
    name: string;
    type: string;
    amount: number;
  }

  //use each functions from useForm
  const { register, handleSubmit, resetField } = useForm<IFormInput>();

  // Using the query hook to add the data (useAddTransactionMutation() returns an array)
  const [addTransaction] = useAddTransactionMutation();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    if (!data) return {};
    await addTransaction(data).unwrap();
    resetField("name"); //clear the field
    resetField("amount"); //clear the field
  };

  return (
    <div className="form max-w-sm mx-auto w-96">
      <h1 className="font-bold pb-4 text-xl">Transaction</h1>

      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="input-group">
            <input type="text" {...register("name")} placeholder="salary house rent" className="form-input" />
            {/*spread syntax */}
          </div>
          <select {...register("type")} className="form-input" defaultValue="Savings">
            <option value="Savings">Savings</option>
            <option value="Expense">Expense</option>
            <option value="investment">Investment</option>
          </select>
          <div className="input-group">
            <input type="text" {...register("amount")} placeholder="Amount" className="form-input" />
          </div>
          <div className="submit-btn">
            <button className="border py-2 text-white bg-pink-600 w-full">Add</button>
          </div>
        </div>
      </form>

      <List></List>
    </div>
  );
}
