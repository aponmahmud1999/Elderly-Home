
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Footer from './Component/Footer';
import Home from './Component/Home';
import Navbar from './Component/Navbar';

function App() {
  return (
    <div>
     
     <Routes>
     <Route path='/' element={<Home></Home>}/>
     <Route path='/about' element={<About></About>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
