export default function Form() {
  return (
    <div className="form max-w-sm mx-auto w-96">
      <h1 className="font-bold pb-4 text-xl">Transaction</h1>

      <form id="form">
        <div className="grid gap-4">
          <div className="input-group">
            <input type="text" placeholder="salary house rent" className="form-input" />
          </div>
          <select className="form-input">
            <option value="Savings" defaultValue>
              Savings
            </option>
            <option value="Expense">Expense</option>
            <option value="investment">Investment</option>
          </select>
          <div className="input-group">
            <input type="text" placeholder="Amount" className="form-input" />
          </div>
          <div className="submit-btn">
          <button className="border py-2 text-white bg-pink-600 w-full">Add</button>
          </div>
        </div>
      </form>
    </div>
  );
}
