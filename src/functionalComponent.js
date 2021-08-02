import React from "react";
import { ThemeContext } from "./App";

const FunctionalComponent = () => {
	const darkTheme = React.useContext(ThemeContext);
	const themeStyle = {
		backgroundColor: darkTheme ? "#333" : "#CCC",
		color: darkTheme ? "#CCC" : "#333",
		padding: "2rem",
		margin: "2rem",
	};
	return <div style={themeStyle}>this is fumctional component</div>;
};

export default FunctionalComponent;
