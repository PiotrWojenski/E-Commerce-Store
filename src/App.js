import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
import Cart from './pages/Cart/Cart'
import Topbar from './components/Topbar'

function App() {
	return (
		<Router>
			<Topbar />
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<Products />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
			</Routes>
		</Router>
	)
}

export default App
