import React, { useEffect, useState } from "react";
import axios from "axios";
import CsvFileReader from "./CsvFileReader";

const PREDICTIX_URL = "http://vps-ion.tech:3000/data";

function MainPage() {
	const [data, setData] = useState([]);

	async function fetchData() {
		const response = await axios.get(PREDICTIX_URL);
		console.log(response.data);
		setData(response.data);
		console.log("Alles gut !");
	}

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div>
			<div>Main page !: {data}</div>
			<CsvFileReader />
		</div>
	);
}

export default MainPage;
