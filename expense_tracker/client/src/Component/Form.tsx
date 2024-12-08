import { useForm, SubmitHandler } from "react-hook-form";

export default function Form() {

  interface IFormInput {
    name: string
    type: string
    amount: number
  }

  const { register, handleSubmit, resetField } =  useForm<IFormInput>();
  //↑ to use each functions from useForm

const onSubmit: SubmitHandler<IFormInput> =(data)=>{
  console.log(data);
}

  return (
    <div className="form max-w-sm mx-auto w-96">
      <h1 className="font-bold pb-4 text-xl">Transaction</h1>

      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="input-group">
            <input type="text" {...register("name")} placeholder="salary house rent" className="form-input" />
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
    </div>
  );
}
