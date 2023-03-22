import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Login from './pages/Login'
import { Outlet } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import {Routes, Route } from "react-router-dom";
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/about" element={<LandingPage />} />
        <Route path="/contact" element={<LandingPage/>} />
        <Route path="/register" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />

      </Routes>
      <Outlet/>

    <Footer/>
    </div>
  );
}

export default App;
