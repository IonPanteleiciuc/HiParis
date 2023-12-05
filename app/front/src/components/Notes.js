import React from "react";
import style from "./styles/Notes.module.css";

function Notes() {
	return (
		<div>
			<div className={style.container}>
				<b>Note:</b> If you don't see the data, consider switching from
				the ENSAE wifi. For an unknown reason the ENSAE wifi blocks
				connections to remote unsecured servers (like my personal server
				on which the app is deployed).
			</div>
			<div className={style.container}>
				<b>Note 2:</b> You don't need to upload a csv, the data is
				stored in a database. We only stored a couple samples, otherwise
				the dashboard would be slowed down.
			</div>
			<div className={style.container}>
				<b>Note 3:</b> Here you can visualize the concatenation of our
				test set and our predicted variables for month 4.
			</div>
			<div className={style.container}>
				<b>Note 4:</b> If you encounter an error: refresh. I did non
				have enough time to anticipate all the issues.
			</div>
		</div>
	);
}
export default Notes;
