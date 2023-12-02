import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";

function App() {
	return (
		<div className="app">
			Hello there
			<Routes>
				<Route exact path="/predictix/" Component={MainPage} />
			</Routes>
		</div>
	);
}

export default App;
