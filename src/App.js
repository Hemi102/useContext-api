import React from "react";
import FunctionalComponent from "./functionalComponent";
import { ThemeProvider } from "./themeContext";

function App() {
	return (
		<ThemeProvider>
			<FunctionalComponent />
		</ThemeProvider>
	);
}

export default App;
