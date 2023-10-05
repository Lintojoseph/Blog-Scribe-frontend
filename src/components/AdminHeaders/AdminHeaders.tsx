import { Link, useNavigate } from 'react-router-dom';

function AdminHeader() {
    const navigate = useNavigate()
    return (
        <>
            <div className="p-3">
                <nav className="bg-red-50 border-b border-gray-300 fixed w-full top-0 left-0 right-0 z-50">
                    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                        <a className="text-3xl font-bold leading-none text-violet-800" href="#">
                            Blogscribe
                        </a>

                        <button
                            className="bg-violet-500 hover:bg-violet-600 text-white font-semibold px-4 py-2 rounded transition duration-300 ease-in-out"
                            onClick={() => {
                                localStorage.removeItem('adminJwtToken');
                                navigate('/admin/login');
                            }}
                        >
                            Logout
                        </button>

                    </div>
                </nav>
            </div>


        </>
    )
}

export default AdminHeader