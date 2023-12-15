import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'

import Home from './pages/Home/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'

function App() {
	return (
		<div className="App">
			<Home />
		</div>
	)
}

export default App
