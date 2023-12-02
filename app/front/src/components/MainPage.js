import React, { useEffect, useState } from "react";
import axios from "axios";

const PREDICTIX_URL = "http://vps-ion.tech:3000";

function MainPage() {
	const [data, setData] = useState([]);

	async function fetchData() {
		console.log("url: ", PREDICTIX_URL);
		const response = await axios.get(PREDICTIX_URL);
		console.log("response: ", response);
		setData(response.data);
	}

	useEffect(() => {
		fetchData();
	}, []);

	const handleFileUpload = async (event) => {
		const file = event.target.files[0];
		const formData = new FormData();
		formData.append("file", file);

		try {
			await fetch("http://backend-url/upload", {
				method: "POST",
				body: formData,
			});
			// handle response
		} catch (error) {
			// handle error
		}
	};

	return (
		<div>
			<div>Main page ! {data}</div>
			<div>
				Input csv: <input type="file" onChange={handleFileUpload} />
			</div>
		</div>
	);
}

export default MainPage;
