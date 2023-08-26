import React from "react";
import ReactDOM from "react-dom/client"
const root = ReactDOM.createRoot(document.getElementById('elem'))
const url = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png'
const Header = () => (
    <div className="container">
        <img className="logo" src={url} alt="no iamge found" />
        <input className="search-box" type="text" placeholder="serach here......" />
        <ul className="nav">
            <li>About</li>
            <li>contact</li>
            <li>Joinus</li>
            <li>Feedback</li>
        </ul>
    </div>
)
root.render(<Header />)