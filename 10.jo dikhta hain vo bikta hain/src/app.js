import React from "react";
import {lazy} from 'react'
import ReactDOM from "react-dom/client"
const root = ReactDOM.createRoot(document.getElementById('elem'))
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Errorpage";
import MenuCard from "./components/Menu";
// import Grocessary from "./components/Grocessary";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Suspense } from "react/cjs/react.production.min";

const Grocessary  = lazy(()=>import('./components/Grocessary'))

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
        }, { path: "/menu", element: <MenuCard /> },{
            path:"/grocessary",element:<Suspense fallback={<h1>Loading plase wait....</h1>}><Grocessary/></Suspense>
        }]
    },
])
root.render(<RouterProvider router={router} />
);

