import React from "react";
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('elem'))
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Errorpage";


const Applyaout = () => {

    return (
        <div className="" >

            <Header />
            <Outlet />

        </div >
    )

}
const router = createBrowserRouter([
    {
        path: "/",
        element: <Applyaout />,
        errorElement: <Error />,
        children: [{ path: "/", element: <Body /> }, {
            path: "/about",
            element: <About />
        }]
    },
])
root.render(<RouterProvider router={router} />)