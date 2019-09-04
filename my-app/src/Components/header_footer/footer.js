import React from 'react';
import { CityLogo } from '../ui/icons';

const Footer = () => {
	const dt = new Date();
	return (
		<footer className="bck_blue">
			<div className="footer_logo">
				<CityLogo width="70px" height="70px" link={true} linkTo="/" />
			</div>
			<div className="footer_discl">
				Manchester city {dt.getFullYear()}.All rights reserved. Developed by Jane Alam Tusher
			</div>
		</footer>
	);
};

export default Footer;
