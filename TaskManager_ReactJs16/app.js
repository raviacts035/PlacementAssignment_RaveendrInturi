import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider,Outlet,Navigate} from "react-router-dom";
import Dashbord from "./components/Dashbord";
import Login from "./components/Login";
import ErrorPage from "./components/Error";


const AppLayout=()=>{
    return (
        <>
        <Outlet/>
        <Navigate to={"/login"}/>
        </>
    )
}

const appRoutes=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"dashbord/:id",
                element:<Dashbord/>,
                errorElement:<ErrorPage/>,
            },
            {
                path:"/login",
                element:<Login/>,
                errorElement:<ErrorPage/>,
            },
        ]
    },
])


const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRoutes}/>)