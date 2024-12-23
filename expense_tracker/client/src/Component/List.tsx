import "boxicons" ;
import { useGetLabelsQuery } from "../store/apiSlice";


type DataType = {
  type: string;
  color: string;
  percent: number;
};

export default function List() {
 // Using the query hook to fetch the data
  const { data, isFetching, isSuccess, isError } = useGetLabelsQuery(undefined);

  // Default state
  let Transactions: React.ReactNode;

  if (isFetching) {
    Transactions = <div>Fetching</div>;
  } else if (isSuccess && data) {
    Transactions = data.map((v: DataType, index: number) => <Transaction key={index} category={v} />);
  } else if (isError) {
    Transactions = <div>Error</div>;
  }
  return (
    <div className="flex flex-col py-6 gap-3">
      <h1 className="py-4 text-md font-bold text-xl">History</h1>
      {Transactions}
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
