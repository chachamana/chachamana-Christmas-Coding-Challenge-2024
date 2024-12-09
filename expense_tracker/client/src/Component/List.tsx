import "boxicons";

type DataType = {
  type: string;
  color: string;
  percent: number;
};

const obj: DataType[] = [
  {
    type: "Savings",
    color: "rgb(255, 99, 132)",
    percent: 45,
  },
  {
    type: "investment",
    color: "#f9c74f",
    percent: 20,
  },
  {
    type: "Expense",
    color: "#f9c74f",
    percent: 10,
  },
];

export default function List() {
  return (
    <div className="flex flex-col py-6 gap-3">
      <h1 className="py-4 text-md font-bold text-xl">History</h1>
      {obj.map((v, i) => (
        <Transaction key={i} category={v} /> // repeat <Transaction / > (below
      ))}
    </div>
  );
}

interface TransactionProps {
  category: DataType;
}
const Transaction: React.FC<TransactionProps> = ({ category }: TransactionProps) => {
  if (!category) return null;
  return (
    <div className="item flex justify-center  bg-gray-50 py-2 rounded-4" style={{ borderLeft: `8px solid ${category.color ?? "#e5e5e5"}` }}>
      <button className="px-3">
        <box-icon name="trash" color={"#424242"} size="16px"></box-icon>
      </button>
      <span className="block w-full">{category.type ?? ""}</span>
    </div>
  );
};
