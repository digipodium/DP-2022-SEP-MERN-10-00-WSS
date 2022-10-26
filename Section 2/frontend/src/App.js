import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {
  
  return (
    <div>
      <BrowserRouter>
        {/* <Link to="/home">Home</Link>
        <Link to="/login">Login</Link> */}
        <Navbar/>
        <Routes>
            <Route element={<Home />} path="" />
            <Route element={<Home />} path="home" />
            <Route element={<Login />} path="login" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;