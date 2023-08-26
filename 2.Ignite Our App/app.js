import React from "react";
import ReactDOM from "react-dom/client"
const heading = React.createElement("h1", { id: "coc" }, "myfirstheading");
const rootel = ReactDOM.createRoot(document.getElementById("elem"));
const parent = React.createElement(
    'div',
    {},
    [
        React.createElement('h1', {}, 'dive 1st elem'),
        React.createElement('h1', {}, 'dive 2nd elem')
    ]
);
const thirdparent = React.createElement('div', {}, [React.createElement(
    'div',
    {},
    [
        React.createElement('h1', {}, 'dive 1st elem'),
        React.createElement('h1', {}, 'dive 2nd elem')
    ]
), React.createElement(
    'div',
    {},
    [
        React.createElement('h1', {}, 'dive 1st elem'),
        React.createElement('h1', {}, 'dive 2nd elem')
    ]
)])
rootel.render([heading, thirdparent]);