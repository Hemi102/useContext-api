import React from "react";
import { ThemeContext } from "./App";
import { useTheme, useUpdateTheme } from "./themeContext";

const FunctionalComponent = () => {
	const darkTheme = useTheme();
	const toggleTheme = useUpdateTheme();
	const themeStyle = {
		backgroundColor: darkTheme ? "#333" : "#CCC",
		color: darkTheme ? "#CCC" : "#333",
		padding: "2rem",
		margin: "2rem",
	};
	return (
		<>
			<div style={themeStyle}>this is fumctional component</div>
			<button onClick={toggleTheme}>Toggle Theme</button>
		</>
	);
};

export default FunctionalComponent;
