import React from "react";
import FunctionalComponent from "./functionalComponent";

export const ThemeContext = React.createContext();

function App() {
	const [darkTheme, setDarkTheme] = React.useState(true);

	const toggleTheme = () => {
		setDarkTheme((preTheme) => !preTheme);
	};

	return (
		<ThemeContext.Provider value={darkTheme}>
			<button onClick={toggleTheme}>Toggle Theme</button>
			<FunctionalComponent />
		</ThemeContext.Provider>
	);
}

export default App;
