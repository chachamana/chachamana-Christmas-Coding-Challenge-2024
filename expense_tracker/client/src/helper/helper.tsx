import _ from "lodash";

type DataType = {
  _id: string;
  type: string;
  color: string;
  amount: number;
};

type SumResult = {
  type: string;
  color: string;
  total: number;
}[];

export function getSum(transaction: DataType[]):SumResult {
  let sum = _(transaction)
    .groupBy("type") //group the data by 'type'
    .map((obj, key) => ({
      type: key,
      color: obj[0].color,
      total: _.sumBy(obj, "amount"),
    }))
    .value();
  return sum;
}

type LabelResult = {
  type: string;
  color: string;
  total: number;
  percent: number;
}[];

export function getLabels(transaction: DataType[]): LabelResult{
  const amountSum = getSum(transaction); // Get the sum grouped by type
  const Total = _.sumBy(amountSum, "total"); // Calculate the overall total
  const percent = amountSum.map((obj) => ({
    ...obj,
    percent: (100 * obj.total) / Total,
  }));
  console.log(percent);
  return percent;
        // example) percent‥  {type:"Savings", color;"#ffffff", total 100, percent;14.2 }

  }
