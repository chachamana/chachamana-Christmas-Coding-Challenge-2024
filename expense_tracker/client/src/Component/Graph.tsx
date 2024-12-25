import { Doughnut } from 'react-chartjs-2';
import { Chart,ArcElement} from 'chart.js';
import Labels from "./Labels";
import { chart_Data, getTotalSum } from '../helper/helper';
import { useGetLabelsQuery } from '../store/apiSlice';

Chart.register(ArcElement); // without this line, can't show on the display ,,

export default function Graph() {

 const { data, isFetching, isSuccess, isError } = useGetLabelsQuery(undefined);

   // Default state
   let graphData: React.ReactNode;

   if (isFetching) {
    graphData = <div>Fetching</div>;
   } else if (isSuccess && data) {
   graphData = <Doughnut {...chart_Data(data)}></Doughnut>;
   } else if (isError) {
    graphData = <div>Error</div>;
   }

  return (
    <div className="flex justify-content max-w-xs mx-auto">
        <div className="item">
            <div className="chart relative">
              {graphData}
                <h3 className='mb-4 font-bold title'>Total
                  <span className='block text-3xl text-emerald-400'>£{getTotalSum(data) ?? 0}
                  </span>
                </h3>
            </div>
<div className="flex flex-col py-10 gap-4">
{/* labels */}
<Labels></Labels>
</div>

        </div>
       </div>
  )
}