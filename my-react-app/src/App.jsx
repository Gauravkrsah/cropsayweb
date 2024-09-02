import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Details from './pages/Details';
import ProductDetail from './pages/ProductDetail';
import ScrollToTop from './pages/scroll';


function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/category/:name" element={<Details />} />
        <Route path="/product/detail/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;