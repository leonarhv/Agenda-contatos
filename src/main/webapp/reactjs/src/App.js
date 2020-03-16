import React from 'react';
import Header from './components/header';
import Main from './pages/main'
import Menu from './components/menu'
import AdicionaContato from './pages/AdicionaContato';

const App = () => (
	<div className="App">
		<Header />
		<Menu />
		<AdicionaContato />
		{/* <Main /> */}
	</div>
)

export default App;
