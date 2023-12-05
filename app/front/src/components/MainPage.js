import React, { useEffect, useState } from "react";
import axios from "axios";
import LineChartComponent from "./LinearChartComponent";
import style from "./styles/MainPage.module.css";

const PREDICTIX_URL = "http://vps-ion.tech:3000/";
const UPLOADER_URL = "http://vps-ion.tech:3000/upload";

const regionMapping = {
	0: "CHINA",
	1: "EAJP",
	2: "EUROPE",
	3: "NAM",
};

const countryMapping = {
	0: "AU",
	1: "BE",
	2: "BN",
	3: "CN",
	4: "DE",
	5: "DK",
	6: "ES",
	7: "FJ",
	8: "FR",
	9: "GB",
	10: "HK",
	11: "IT",
	12: "Id",
	13: "JP",
	14: "KH",
	15: "KR",
	16: "LA",
	17: "MM",
	18: "MN",
	19: "MY",
	20: "NL",
	21: "NZ",
	22: "PG",
	23: "PH",
	24: "PL",
	25: "SE",
	26: "SG",
	27: "TH",
	28: "TW",
	29: "US",
	30: "VN",
};

const zoneMapping = {
	0: "BeNe",
	1: "CEEI",
	2: "China & HK",
	3: "DACH",
	4: "East Asia Japan",
	5: "France",
	6: "Iberia",
	7: "Italy",
	8: "Nordic & Baltics",
	9: "Pacific",
	10: "UK and Ireland",
	11: "US",
};

function MainPage() {
	const [data, setData] = useState([]);
	const [selectedYear, setSelectedYear] = useState(2021);
	const [selectedQuarter, setSelectedQuarter] = useState(1);
	const [selectedRegion, setSelectedRegion] = useState(null);
	const [selectedCountry, setSelectedCountry] = useState(null);
	const [selectedZone, setSelectedZone] = useState(null);
	const [labels, setLabels] = useState(1);

	async function fetchData() {
		console.log("Sending: ", {
			params: {
				year: selectedYear,
				quarter: selectedQuarter,
				region: selectedRegion,
				country: selectedCountry,
				zone: selectedZone,
			},
		});

		const response = await axios.get(PREDICTIX_URL, {
			params: {
				year: selectedYear,
				quarter: selectedQuarter,
				region: selectedRegion,
				country: selectedCountry,
				zone: selectedZone,
			},
		});

		console.log("Receiving: ", response.data);
		setData(response.data);
		setLabels(selectedQuarter);
	}

	useEffect(() => {
		fetchData();
	}, [
		selectedYear,
		selectedQuarter,
		selectedRegion,
		selectedCountry,
		selectedZone,
	]);

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
		fetchData();
	};

	return (
		<div className={style.container}>
			<div className={style.uploadButtonWrapper}>
				<label htmlFor="file-upload" className={style.uploadButton}>
					Upload CSV
				</label>
				<input
					type="file"
					id="file-upload"
					accept=".csv"
					// onChange={handleFileUpload}
					style={{ display: "none" }}
				/>
			</div>

			{/* Filters section */}
			<div className={style.filters}>
				<select
					value={selectedYear}
					onChange={(e) => setSelectedYear(Number(e.target.value))}
				>
					<option value={null}>Select Year</option>
					<option value={2020}>2020</option>
					<option value={2021}>2021</option>
					<option value={2023}>2023</option>
				</select>

				<select
					value={selectedQuarter}
					onChange={(e) => setSelectedQuarter(Number(e.target.value))}
				>
					<option value={null}>Select Quarter</option>
					<option value={1}>May - Aug.</option>
					<option value={2}>Jan.- Apr.</option>
					<option value={3}>Sep.- Dec. </option>
				</select>

				<select
					value={selectedRegion}
					onChange={(e) => setSelectedRegion(e.target.value)}
				>
					<option value={null}>Select Region</option>
					{Object.entries(regionMapping).map(([key, value]) => (
						<option key={key} value={key}>
							{value}
						</option>
					))}
				</select>

				<select
					value={selectedCountry}
					onChange={(e) => setSelectedCountry(e.target.value)}
				>
					<option value={null}>Select Country</option>
					{Object.entries(countryMapping).map(([key, value]) => (
						<option key={key} value={key}>
							{value}
						</option>
					))}
				</select>

				<select
					value={selectedZone}
					onChange={(e) => setSelectedZone(e.target.value)}
				>
					<option value={null}>Select Zone</option>
					{Object.entries(zoneMapping).map(([key, value]) => (
						<option key={key} value={key}>
							{value}
						</option>
					))}
				</select>
			</div>

			<button className={style.applyButton} onClick={fetchData}>
				Apply filters
			</button>

			<div className={style.dashboardContainer}>
				<div className={style.dashboard}>
					{data ? (
						<LineChartComponent data={data} quarter={labels ?? 1} />
					) : (
						"You need to upload data"
					)}
				</div>
			</div>
		</div>
	);
}

export default MainPage;
