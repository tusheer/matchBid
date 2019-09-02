import React from 'react';
import Layout from './Components/Hoc/layout.js';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/home/index';
function App() {
	return (
		<div>
			<Router>
				<Layout>
					<Switch>
						<Route path="/" component={Home} />
					</Switch>
				</Layout>
			</Router>
		</div>
	);
}

export default App;
