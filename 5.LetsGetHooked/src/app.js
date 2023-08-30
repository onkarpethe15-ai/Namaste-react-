import React from "react";
import ReactDOM from "react-dom/client"
const root = ReactDOM.createRoot(document.getElementById('elem'))
import Header from "./components/Header";
import Search from "./components/Searcj";
import Body from "./components/Body";


const Applyaout = () => {
    return (
        <div className="">

            <Header />
            <Search />
            <Body />

        </div>
    )

}
root.render(<Applyaout />)