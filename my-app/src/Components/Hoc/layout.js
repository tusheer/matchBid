import React from 'react';
import Header from '../header_footer/header';
import Footer from '../header_footer/footer';

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
