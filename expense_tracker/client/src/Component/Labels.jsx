import React from "react" ;

const obj = [
  {
    type:"Savings",
    color:'#c47171'
  }
]


export default function Labels() {
  return (
    <>
    {LabelComponent()}
    </>
  )
}

function LabelComponent(){
  return(
    <div className="labels flex justify-between">
    <div className="flex gap-2">
      <div className="w-2 h-2 rounded py-3" style={{background:`#c47171`}}></div>
    <h3>Savings</h3>
    </div>
    <h3 className="font-bold">45%</h3>
    </div>
  )
}