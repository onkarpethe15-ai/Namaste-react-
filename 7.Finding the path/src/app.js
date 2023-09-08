import React from "react";
import ReactDOM from "react-dom/client"
const root = ReactDOM.createRoot(document.getElementById('elem'))
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Errorpage";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


const Applyaout = () => {
    return (
        <div className="">
            <Header />
            <Outlet />

        </div>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Applyaout />,
        errorElement: <Error />,
        children: [{ path: "/", element: <Body /> }, {
            path: "/contact",
            element: <Contact />
        }]
    },
])
root.render(<RouterProvider router={router} />
);

