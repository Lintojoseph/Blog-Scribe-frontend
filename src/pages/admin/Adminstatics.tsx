import AdminHeader from "../../components/AdminHeaders/AdminHeaders"
import AdminSidebar from "../../components/AdminSidebar/AdminSidebar"
import { useLocation } from "react-router-dom";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend, PointElement,LineElement,ArcElement } from "chart.js";
import { Line,Doughnut } from "react-chartjs-2";
import { getstatics } from "../../services/adminApi";
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";

interface Statistics {
    userstatics: number[];
    articlecount: number;
    totalArticle: number;
  }
function Adminstatics(){
    const location = useLocation();
    const[statics,setStatics]=useState<Statistics>()
    const admin = useSelector((state:any) => state.admin)

    useEffect(() => {
        getstatics()
          .then((response) => {
            console.log(response.data);
            setStatics(response.data)
          })
      }, [admin])

      //chart js
  ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, PointElement, LineElement, ArcElement)

  //line chart data
  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Number of users joined based on month',
        data: statics?.userstatics,
        backgroundColor: 'rgb(81,118,224)',
        borderColor: 'rgb(81,118,224)',
        borderWidth: 1,
      },
    ],
  };

  //pie chart data
  const PieChartData = {
    labels: [ 'Articles'],
    datasets: [
      {
        label: '',
        data: [ statics?.totalArticle],
        backgroundColor: ["rgb(54,185,204)","#FFFFFF"],
        borderWidth: 1,
      },
    ],
  };
    return(
        <div className='relative flex'>
      <AdminSidebar location={location} />
      <AdminHeader />
      <div className='admin-page p-3 ' >
        <main className="p-6 sm:p-10 space-y-6">
          
          <section className="grid md:grid-cols-2 xl:grid-cols-2 xl:grid-rows-3 xl:grid-flow-col gap-6">
            <div className="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg">
              <div className="px-6 py-5 font-semibold border-b border-gray-100 mt-4">Users</div>
              <div className="p-4 flex-grow">
                <Line data={lineChartData} />
              </div>
            </div>
            <div className="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg">
              <div className="px-6 py-5 font-semibold border-b border-gray-100 mt-4">Articles</div>
              <div className="p-4 flex-grow">
                <Doughnut data={PieChartData} />
              </div>
            </div>
          </section>
        </main>
      </div>

    </div>
    )
}

export default Adminstatics