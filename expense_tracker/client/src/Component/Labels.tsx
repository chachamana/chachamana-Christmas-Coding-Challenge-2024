import React from "react";
import { useGetLabelsQuery } from "../store/apiSlice";
import { getSum,getLabels } from "../helper/helper";

type DataType = {
  type: string;
  color: string;
  percent: number;
  name?:string;
  date?:string;
};

export default function Labels() {
  // Using the query hook to fetch the data

  const { data, isFetching, isSuccess, isError } = useGetLabelsQuery(undefined);

  // Default state
  let Transactions: React.ReactNode;


  if (isFetching) {
    Transactions = <div>Fetching</div>;
  } else if (isSuccess && data) {
    Transactions = getLabels(data).map((v: DataType, index: number) => <LabelComponent key={index} data={v} />);
  } else if (isError) {
    Transactions = <div>Error</div>;
  }
  return <>{Transactions}</>;
}

type LabelComponentProps = {
  data: DataType;
};

function LabelComponent({ data }: LabelComponentProps) {
  if (!data) return <></>;
  return (
    <div className="labels flex justify-between">
      <div className="flex gap-2">
        <div className="w-2 h-2 rounded py-3" style={{ background: data.color ?? `#f9c74f` }}></div>
        <h3 className="text-md">{data.type ?? ""}</h3>
      </div>
      <h3 className="font-bold">{Math.round(data.percent) ?? 0}%</h3>
    </div>
  );
}
