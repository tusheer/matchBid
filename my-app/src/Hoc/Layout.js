import React from 'react';
import Header from '../Components/header_footer/header';
import Footer from '../Components/header_footer/footer';

const Layout = (props) => {
	return (
		<div>
			<Header />
			{props.children}
			<Footer />
		</div>
	);
};

export default Layout;
