import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Details from './pages/Details';
import ProductDetail from './pages/ProductDetail';
import ScrollToTop from './pages/scroll';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/category/:name" element={<Details />} />
        <Route path="/product/category/all" element={<Details />} />
        <Route path="/product/detail/:id" element={<ProductDetail />} />
      </Routes>
    <Footer/>
    </Router>
  );
}

export default App;