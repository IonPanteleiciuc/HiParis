import React from "react";
import c from "./styles/Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className={c.container}>
			<div className={c.logo}>PredictiX</div>
			<div className={c.menu}>
				<Link to="/predictix" className={c.Link}>
					Dashboard
				</Link>
				<Link to="/predictix/data" className={c.Link}>
					Raw data
				</Link>
			</div>
		</header>
	);
};

export default Header;
