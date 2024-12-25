import "boxicons";
import { useGetLabelsQuery,useDeleteTransactionMutation } from "../store/apiSlice";

type DataType = {
  type: string;
  color: string;
  percent: number;
  name?:string;
  date?:string;
};

export default function List() {
  // Using the query hook to fetch the data
  const { data, isFetching, isSuccess, isError } = useGetLabelsQuery(undefined);
  const [deleteTransaction] = useDeleteTransactionMutation();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement; //tell typescript the type by 'as'
    if(!target.dataset.id) return;
    else deleteTransaction({_id:target.dataset.id});
  };

  // Default state
  let Transactions: React.ReactNode = null;

  if (isFetching) {
    Transactions = <div>Fetching</div>;
  } else if (isSuccess && data) {
    Transactions = data.map((v: DataType, index: number) => <Transaction key={index} category={v} handler={handleClick} />);
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
  handler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const Transaction = ({ category, handler }: TransactionProps) => {
  if (!category) return null;
console.log(category);
  return (
    <div className="item flex justify-center items-center bg-gray-50 py-2 rounded-md" style={{ borderLeft: `8px solid ${category.color ?? "#e5e5e5"}` }}>
      <button className="px-3" onClick={handler}>
      <box-icon name="trash" color={"#424242"} size="16px" data-id={category._id ?? ""}></box-icon>
      </button>
      <span className="block w-full">{category.name ?? ""}</span>
      <span className="block w-full text-xs">{category.date ?? ""}</span>
    </div>
  );
};
