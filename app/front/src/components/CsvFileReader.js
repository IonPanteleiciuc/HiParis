import React, { useState } from "react";
import Papa from "papaparse";

const CsvFileReader = () => {
	const [data, setData] = useState([]);

	const readFile = (file) => {
		const reader = new FileReader();
		reader.onload = (e) => {
			const text = e.target.result;
			console.log(text);

			Papa.parse(text, {
				header: true,
				skipEmptyLines: true,
				error: (error, file) => {
					console.error(
						"Error parsing CSV:",
						error,
						"in file:",
						file
					);
				},
				complete: (results) => {
					console.log(results);
					setData(results.data);
				},
			});
		};

		reader.readAsBinaryString(file);
	};

	const handleFileUpload = (e) => {
		const file = e.target.files[0];
		readFile(file);
	};

	return (
		<div>
			<input type="file" accept=".csv" onChange={handleFileUpload} />
			{/* Displaying the parsed data */}
			<div>
				{data.length > 0 && (
					<table>
						<thead>
							<tr>
								{Object.keys(data[0]).map((header, index) => (
									<th key={index}>{header}</th>
								))}
							</tr>
						</thead>
						<tbody>
							{data.map((row, index) => (
								<tr key={index}>
									{Object.values(row).map((value, index) => (
										<td key={index}>{value}</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
				)}
			</div>
		</div>
	);
};

export default CsvFileReader;
