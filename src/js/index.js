//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import SimpleCounter from "./component/SimpleCounter.jsx";

let counter = 0

setInterval(() => {
    let sec = Math.floor((counter / 1) % 10)
    let sec2 =Math.floor((counter / 10) % 10)
    let sec3 =Math.floor((counter / 100) % 10)
    let sec4 =Math.floor((counter / 1000) % 10)
    let sec5 =Math.floor((counter / 10000) % 10)
    let sec6 =Math.floor((counter / 100000) % 10)
    
    ReactDOM.render(<SimpleCounter sec={sec} sec2={sec2} sec3={sec3} sec4={sec4} sec5={sec5} sec6={sec6}/>, document.querySelector("#app"));
    counter++
},[1000])
//render your react application