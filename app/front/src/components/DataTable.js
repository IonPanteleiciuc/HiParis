import React, { useEffect, useState } from "react";
import axios from "axios";

const PREDICTIX_URL = "http://vps-ion.tech:3000/";

const DataTable = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(PREDICTIX_URL);
				setData(response.data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<div>
			<h2>Data Table</h2>
			<table border="1">
				<thead>
					<tr>
						<th>ID Product</th>
						<th>Region</th>
						<th>Country</th>
						<th>Zone</th>
						<th>Year</th>
						<th>Quarter Cumuled</th>
						<th>Quarter</th>
						<th>Month 1</th>
						<th>Month 2</th>
						<th>Month 3</th>
						<th>Month 4</th>
					</tr>
				</thead>
				<tbody>
					{data.map((row, index) => (
						<tr key={index}>
							<td>{row.id_product}</td>
							<td>{row.Region}</td>
							<td>{row.Country}</td>
							<td>{row.Zone}</td>
							<td>{row.Year}</td>
							<td>{row.Quarter_cumuled}</td>
							<td>{row.Quarter}</td>
							<td>{row.Month_1}</td>
							<td>{row.Month_2}</td>
							<td>{row.Month_3}</td>
							<td>{row.Month_4}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default DataTable;
