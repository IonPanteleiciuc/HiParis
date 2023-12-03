import React, { useEffect, useState } from "react";
import axios from "axios";

const PREDICTIX_URL = "http://vps-ion.tech:3000";
const UPLOADER_URL = "http://vps-ion.tech:3000/upload";

function MainPage() {
	const [data, setData] = useState([]);

	async function fetchData() {
		const response = await axios.get(PREDICTIX_URL + "/data");
		console.log(response.data);
		setData(response.data);
		console.log("Alles gut !");
	}

	useEffect(() => {
		fetchData();
	}, []);

	const handleFileUpload = async (event) => {
		const file = event.target.files[0];
		const formData = new FormData();
		formData.append("file", file);

		try {
			const response = await axios.post(UPLOADER_URL, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
			// Handle response...
			console.log(response.data);
		} catch (error) {
			// Handle error...
			console.error(error);
		}
	};

	return (
		<div>
			<div>Main page !: {data}</div>
			<input type="file" accept=".csv" onChange={handleFileUpload} />
		</div>
	);
}

export default MainPage;
