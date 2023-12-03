import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import DataTable from "./components/DataTable";

function App() {
	return (
		<div className="app">
			<Routes>
				<Route exact path="/predictix/" Component={MainPage} />
				<Route exact path="/predictix/data" Component={DataTable} />
			</Routes>
		</div>
	);
}

export default App;
