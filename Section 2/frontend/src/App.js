import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import EventHandling from './Components/EventHandling';
import StateManagement from './Components/StateManagement';
import Chat from './Components/Chat';
import Register from './Components/Register';

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
            <Route element={<EventHandling />} path="event" />
            <Route element={<StateManagement />} path="state" />
            <Route element={<Chat />} path="chat" />
            <Route element={<Register />} path="register" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;