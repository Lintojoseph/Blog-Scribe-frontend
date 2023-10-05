

function AdminCountlist({ icon,data,color,title}){
    return(
        <>
        {/* <main className="p-6 sm:p-10 space-y-6">
         <section className="grid md:grid-cols-2 xl:grid-cols-2 xl:grid-rows-3  gap-6">
            <div className="flex flex-col md:col-span-2 md:row-span-2 bg-slate-300 shadow rounded-lg">
              <div className="px-6 py-5 font-semibold border-b border-gray-100">Users</div>
              <div className="p-4 flex-grow">
               
              </div>
            </div>
            <div className="flex flex-col md:col-span-2 md:row-span-2 bg-slate-300 shadow rounded-lg">
              <div className="px-6 py-5 font-semibold border-b border-gray-100">Orders</div>
              <div className="p-4 flex-grow">
                
              </div>
            </div>
          </section>
          </main> */}
          <div className="flex items-center p-8 bg-white shadow rounded-lg shadow-lg ">
          <div className={`${color} inline-flex flex-shrink-0 items-center justify-center h-16 w-16  rounded-full mr-6`}>
              {icon}
          </div>
          <div>
              <span className="block text-2xl font-bold">{data}</span>
              <span className="block text-gray-500">{title}</span>
          </div>
      </div>
        </>
    )
}
export default AdminCountlist