import { useNavigate } from 'react-router-dom';

function Sucess() {
    const navigate = useNavigate()
    function handleClick() {
        navigate('/home')
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="bg-green-500 text-white p-6 mb-4">
                    Article published successfully
                </div>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>
                    Continue
                </button>
            </div>


        </>
    )
}
export default Sucess

