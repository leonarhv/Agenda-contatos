import React from 'react';

import Header from './components/header';
import Menu from './components/menu'

import Routes from './routes.js';

const App = () => (
	<div className="App">
		<Header />
		<Menu />
		<Routes />
	</div>
)

export default App;
