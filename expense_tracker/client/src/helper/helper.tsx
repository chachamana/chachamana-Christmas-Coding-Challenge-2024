import _ from "lodash";

type DataType = {
  _id: string;
  type: string;
  color: string;
  amount: number;
};

// for each total amount of the same type

type SumResult = {
  type: string;
  color: string;
  total: number;
}[];

export function getSum(transaction: DataType[]): SumResult {
  const grouped = _.groupBy(transaction, "type"); //group the data by 'type'

  const result = _.map(grouped, (obj, key) => ({
    type: key,
    color: obj[0].color,
    total: _.sumBy(obj, "amount"), // sum of each same type 'amount'
  }));

  return result;
  //example  { type: "A", color: "red", total: 40 },
}


// for each percentage (Label)
type LabelResult = {
  type: string;
  color: string;
  total: number;
  percent: number;
}[];

export function getLabels(transaction: DataType[]): LabelResult {
  const amountSum = getSum(transaction); // Get the sum grouped by type
  const Total = _.sumBy(amountSum, "total"); // Calculate the overall total
  const percent = amountSum.map((obj) => ({
    ...obj,
    percent: (100 * obj.total) / Total,
  }));
  return percent;
  // example:  {type:"Savings", color:"#ffffff", total: 100, percent:14.2 }
}

// for Color chart
export function chart_Data(transaction: DataType[], custom?: any) {
  const dataValue = _.map(getSum(transaction), (a) => a.total); //
  let bg = _.map(transaction, (a) => a.color); //_.map　make a NEW array  (from transaction, extract eachdata.color and make an Array)
  bg = _.uniq(bg); // _.uniq eliminate same value

  const config = {
    data: {
      datasets: [
        {
          data: dataValue,
          backgroundColor: bg,
          hoverOffset: 4,
          borderRadius: 30,
          spacing: 10,
        },
      ],
    },
    options: {
      cutout: 100,
    },
  };
  return custom ?? config;
}

//for total amount of chart
export function getTotalSum(transaction: DataType[]):number {
  const totalSum=_.sumBy(transaction,"amount");
  return totalSum;
}
