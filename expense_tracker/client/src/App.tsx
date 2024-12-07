import './App.css'
import Graph from './Component/Graph';
import Form from "./Component/Form";

function App() {

  return (
    <div className='App'>
      <div className="container mx-auto max-w-6xl text-center  text-gray-800">
     <h1 className='text-4xl py-8 mb-10 bg-slate-200 text-slate-800 rounded'>Expense Tracker</h1>

{/*grid columns*/}
<div className="grid md:grid-cols-2 gap-4">
{/* Chart */}
<Graph></Graph>
{/* Form */}
<Form></Form>
</div>

    </div>
    </div>
  )
}

export default App
