import React, { useEffect, useState } from "react";
import axios from "axios";
import LineChartComponent from "./LinearChartComponent";
import * as style from "../styles/MainPage.module.css";

const PREDICTIX_URL = "http://vps-ion.tech:3000/";
const UPLOADER_URL = "http://vps-ion.tech:3000/upload";

function MainPage() {
	const [data, setData] = useState([]);
	const [selectedYear, setSelectedYear] = useState(2021);
	const [selectedQuarter, setSelectedQuarter] = useState(1);
	const [labels, setLabels] = useState(1);

	async function fetchData() {
		console.log("Sending: ", {
			params: {
				year: selectedYear,
				quarter: selectedQuarter,
			},
		});

		const response = await axios.get(PREDICTIX_URL, {
			params: {
				year: selectedYear,
				quarter: selectedQuarter,
			},
		});

		console.log("Recieving: ", response.data);
		setData(response.data);
		setLabels(selectedQuarter);
	}

	useEffect(() => {
		fetchData();
	}, []);

	const handleFileUpload = async (event) => {
		const file = event.target.files[0];
		const formData = new FormData();
		formData.append("file", file);

		try {
			await axios.post(UPLOADER_URL, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
		} catch (error) {
			console.error(error);
		}
	};

	const handleQuarterChange = (quarter) => {
		setSelectedQuarter(quarter);
	};

	return (
		<div>
			<input type="file" accept=".csv" onChange={handleFileUpload} />

			<div onClick={fetchData}>Apply filters</div>

			<select
				value={selectedYear}
				onChange={(e) => setSelectedYear(Number(e.target.value))}
			>
				<option value={null}>Select Year</option>
				<option value="2020">2020</option>
				<option value="2021">2021</option>
				<option value="2023">2023</option>
			</select>

			<select
				value={selectedQuarter}
				onChange={(e) => {
					handleQuarterChange(Number(e.target.value));
				}}
			>
				<option value={null}>Select Quarter</option>
				<option value="1">May - Aug.</option>
				<option value="2">Jan.- Apr.</option>
				<option value="3">Sep.- Dec. </option>
			</select>

			<div className={style.container}>
				<LineChartComponent data={data} quarter={labels ?? 1} />
			</div>
		</div>
	);
}

export default MainPage;
