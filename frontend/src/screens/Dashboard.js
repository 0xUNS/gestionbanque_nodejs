import { Outlet } from "react-router-dom"

function Dashboard(){
   


    return(
        <main className="py-5">
            <Outlet />
        </main>
    )
}
export default Dashboard