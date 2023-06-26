import React, { useContext } from "react";
import "../../styles/home.css";
import Characters from "../component/Character.jsx";
import Planets from "../component/Planets.jsx";


export const Home = () => {
	return (
		<>
		<Characters></Characters>
		<Planets></Planets>
		</>
	)
};
