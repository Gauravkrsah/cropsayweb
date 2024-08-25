
import './App.css';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Details from './pages/Details';





function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/product/:productDetails' element={<Details />} />
        
        
      </Routes>

    </Router>
    
  
)


}

export default App;