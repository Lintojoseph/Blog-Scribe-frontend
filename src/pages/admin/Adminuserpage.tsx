import AdminHeader from "../../components/AdminHeaders/AdminHeaders"
import AdminSidebar from "../../components/AdminSidebar/AdminSidebar"
import Adminuser from "../../components/Adminuser/Adminuser"
import { useLocation } from "react-router-dom";
function Adminuserpage() {
  const location = useLocation();
  return (
    <>
      <div className='relative flex '>
        <AdminSidebar location={location} />
        <AdminHeader />
        <div className='admin-page p-10 ' >
          <Adminuser />
        </div>

      </div>
    </>
  )
}

export default Adminuserpage