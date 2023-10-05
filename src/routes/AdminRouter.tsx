import { Routes,Route } from "react-router-dom";
import AdminLogin from "../pages/admin/AdminLogin";
import PrivateRoutes from "../utils/PrivateRoutes";
import AdminDashboard from "../pages/admin/AdminDashboard";
import { AdminLayout } from "../Layout/Adminlayout";
import Adminuserpage from "../pages/admin/Adminuserpage";
import AdminArticlepage from "../pages/admin/AdminArticlepage";
import Adminstatics from "../pages/admin/Adminstatics";
function AdminRouter(){
    return(
        <Routes>
            <Route path='/login' element={<AdminLogin />} />
            {/* <Route element={<PrivateRoutes role={'admin'} route={"/admin/dashboard"} />}> */}
                
            <Route path="/dashboard" element={<AdminDashboard />} />

            <Route path="/users" element={<Adminuserpage />} />

            <Route path="/articles" element={<AdminArticlepage />} />

            <Route path="/statics" element={<Adminstatics />} />
                
            {/* </Route> */}
        </Routes> 
    )
}

export default AdminRouter