<<<<<<< HEAD
import React from "react";
import { Counter } from "./Counter.js";
//create your first component
const Home = () => {
	return (
		<div>
			<Counter/>
		</div>
	);
};
=======
import React, { useEffect, useState } from "react";

export default function Auto() {
 const [counter, setCounter] = useState(0);

 useEffect(() => {
  const interval = setInterval(() => {
   setCounter((counter) => counter + 1);
  }, 1000);
>>>>>>> 8269c84a4c2b58d04f60a47263686454e7886cad

  return () => {
   clearInterval(interval);
  };
 }, []);

 return <div className="Auto">{counter}</div>;}