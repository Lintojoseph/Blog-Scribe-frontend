import AdminHeader from "../../components/AdminHeaders/AdminHeaders";
import AdminSidebar from "../../components/AdminSidebar/AdminSidebar"
import React  from "react";
import AdminCountlist from "../../components/Admincount/Admincountlist";
import { useLocation } from "react-router-dom";
import { MdGroup } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { useSelector } from "react-redux";
import  { useEffect, useState } from 'react';
import { getdetailsDashboard}  from "../../services/adminApi";

function AdminDashboard(){
    const location = useLocation();
    const admin = useSelector((state:any) => state.admin)
  const [dashboardDetails, setDashboardDetails] = useState<any>();
  useEffect(() => {
    getdetailsDashboard()
      .then((response:any) => {
        console.log(response.data);
        setDashboardDetails(response.data)
      })
  }, [admin])
    return(
    
       <>
  
<div className='relative flex '>
      <AdminSidebar location={location} />
      <AdminHeader />
      <div className='admin-page p-8 ' >
        <main className="p-6 sm:p-10 space-y-6">
          <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
            <div className="mr-6">
              <h1 className="text-4xl font-medium mb-2">Dashboard</h1>
            </div>

          </div>
          <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

            <AdminCountlist icon={<MdGroup />} data={dashboardDetails?.usercount} color={"text-purple-600 bg-purple-100"} title={'Users'} />

            <AdminCountlist icon={<FaChalkboardTeacher />} data={dashboardDetails?.articlecount} color={"text-green-600 bg-green-100"} title={'Article'} />

          
          </section>

      </main>
      </div>
      </div>
        
        </>
    )
}

export default AdminDashboard