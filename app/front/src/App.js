import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import DataTable from "./components/DataTable";
import Header from "./components/Header";
import Notes from "./components/Notes";

function App() {
	return (
		<div className="app">
			<Header />
			<Notes />
			<Routes>
				<Route exact path="/predictix/" Component={MainPage} />
				<Route exact path="/predictix/data" Component={DataTable} />
			</Routes>
		</div>
	);
}

export default App;
