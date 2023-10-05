import AdminArticle from "../../components/AdminArticle/AdminArticle"
import AdminSidebar from "../../components/AdminSidebar/AdminSidebar"
import AdminHeader from "../../components/AdminHeaders/AdminHeaders"
import { useLocation } from "react-router-dom";
function AdminArticlepage(){
    const location = useLocation();
    return(
        <>
        <div className='relative flex '>
        <AdminSidebar location={location} />
        <AdminHeader />
        <div className='admin-page p-10 ' >
          <AdminArticle />
        </div>

      </div>
        </>
    )
}

export default AdminArticlepage