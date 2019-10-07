import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import ProductContext from './contexts/ProductContext';
import CartContent from './contexts/CartContext';

import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	return (
		
		<div className="App">
			<CartContent.Provider value={cart}>
				
			<Navigation />
			</CartContent.Provider>

			{/* Routes */}
			<ProductContext.Provider value={{products, addItem}}>

			<Route
				exact
				path="/"
			component={Products}
			/>
			</ProductContext.Provider>
			<CartContent.Provider value={cart}>

			<Route
				path="/cart"
				component={ShoppingCart}
			/>
			</CartContent.Provider>
		</div>
	);
}

export default App;
