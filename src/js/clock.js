import React from "react";
import ReactDOM from "react-dom";

import Auto from "./Auto";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Auto />
  </React.StrictMode>,
  rootElement
);






// import React from "react";
// import ReactDOM from "react-dom";

// //import your own components
// import Home from "./component/home.jsx";

// //render your react application
// ReactDOM.render(<Home />, document.querySelector("#app"));
// const Home =() => {
//     const [currentTime, setCurrentTime] = usesState(null);
//     const [seconds, setSeconds] = useState(0);
//     const [isActive,setIsActive] = useState(false);
// }
// function toggle(){
//     setIsActive(!isActive);
//     var today = new Date();
//     let date = today.getDay();
//     let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//     let dayTime = date + " " + time;
//     setCurrentTime(dayTime);
// }
// function reset(){
//     setSeconds(0);
//     setIsactive(false);
//     let today=  new Date()
//     let date = today.getDay();
//     let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//     let dayTime = date + " " + time;
//     setCurrentTime(dayTime);
// }
// useEffect(() => {
//     let interval = null;
//     if (isActive) {
//         interval = setInterval(() => {
//             setSeconds((seconds) => seconds +1);
//         }, 1000);
//     } else if (! isActive && seconds !== 0){
//         clearInterval(interval);
//     }
//     return () => clearInterval(interval);
// }, [isActive, seconds]);
// return (
//     <div>
//         <clock
//         seconds={seconds}
//         isActive={isActive}
//         toggle={toggle}
//         reset={reset}
//         currentTime={currentTime}/>
//     </div>
// );
// };


// export default Home;
// //import react into the bundle