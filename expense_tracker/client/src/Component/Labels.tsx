import React from "react";
import { apiSlice as api} from "../store/apiSlice";

type DataType = {
  type: string;
  color: string;
  percent: number;
};

const obj: DataType[] = [
  {
    type: "Living Expenses",
    color: "#f74c71",
    percent: 45,
  },
  {
    type: "Entertainment & Hobbies",
    color: "#f9c74f",
    percent: 20,
  },
  {
    type: "Transportation",
    color: "#4ff9e5",
    percent: 10,
  },
  {
    type: "Savings & Investments",
    color: "#4f63f9",
    percent: 10,
  },
  {
    type: "Others",
    color: "#f94f9e",
    percent: 10,
  },
];


type LabelComponentProps = {
  data: DataType;
};

function LabelComponent({ data }: LabelComponentProps) {
  if (!data) return <></>;
  return (
    <div className="labels flex justify-between">
      <div className="flex gap-2">
        <div
          className="w-2 h-2 rounded py-3"
          style={{ background: data.color ?? `#f9c74f` }}
        ></div>
        <h3 className="text-md">{data.type ?? ""}</h3>
      </div>
      <h3 className="font-bold">{data.percent ?? 0}%</h3>
    </div>
  );
}

export default function Labels() {
  return (
    <>
      {obj.map((v, i) => (
        <LabelComponent key={i} data={v}></LabelComponent>
      ))}
    </>
  );
}