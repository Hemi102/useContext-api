import React, { useContext } from "react";

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export function useTheme() {
	return useContext(ThemeContext);
}

export function useUpdateTheme() {
	return useContext(ThemeUpdateContext);
}

export function ThemeProvider({ children }) {
	const [darkTheme, setDarkTheme] = React.useState(true);

	function toggleTheme() {
		setDarkTheme((preTheme) => !preTheme);
	}

	return (
		<ThemeContext.Provider value={darkTheme}>
			<ThemeUpdateContext.Provider value={toggleTheme}>
				{children}
			</ThemeUpdateContext.Provider>
		</ThemeContext.Provider>
	);
}
