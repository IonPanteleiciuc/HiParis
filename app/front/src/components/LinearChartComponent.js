import React from "react";
import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);
const LineChartComponent = ({ data, quarter }) => {
	const colors = [
		"rgba(255, 99, 132, 1)", // Red
		"rgba(54, 162, 235, 1)", // Blue
		"rgba(255, 206, 86, 1)", // Yellow
		"rgba(75, 192, 192, 1)", // Green
		"rgba(153, 102, 255, 1)", // Purple
		"rgba(255, 159, 64, 1)", // Orange
		"rgba(231, 76, 60, 1)", // Alizarin
		"rgba(241, 196, 15, 1)", // Sunflower
		"rgba(26, 188, 156, 1)", // Turquoise
		"rgba(46, 204, 113, 1)", // Emerald
		"rgba(52, 152, 219, 1)", // Peter River
		"rgba(155, 89, 182, 1)", // Amethyst
		"rgba(52, 73, 94, 1)", // Wet Asphalt
		"rgba(22, 160, 133, 1)", // Green Sea
		"rgba(39, 174, 96, 1)", // Nephritis
		"rgba(41, 128, 185, 1)", // Belize Hole
		"rgba(142, 68, 173, 1)", // Wisteria
		"rgba(44, 62, 80, 1)", // Midnight Blue
		"rgba(243, 156, 18, 1)", // Orange
		"rgba(211, 84, 0, 1)", // Pumpkin
	];

	const labels = {
		1: ["May", "June", "July", "August"],
		2: ["January", "February", "March", "April"],
		3: ["September", "October", "November", "December"],
	};

	const chartData = {
		labels: labels[quarter],
		datasets: data.map((row, index) => ({
			label: `Product ${row.id_product}`,
			data: [row.Month_1, row.Month_2, row.Month_3, row.Month_4],
			backgroundColor: colors[index % colors.length],
			borderColor: colors[index % colors.length], // Cycle through the colors
			fill: false,
			tension: 0.4,
		})),
	};

	const options = {
		plugins: {
			legend: {
				display: true,
			},
		},
		scales: {
			y: {
				beginAtZero: true,
			},
		},
		responsive: true,
		maintainAspectRatio: true,
	};

	return <Line data={chartData} options={options} />;
};

export default LineChartComponent;
