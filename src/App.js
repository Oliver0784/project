
import Nav from './components/Nav';
import Footer from './components/Footer';
import Login from './pages/Login'
import { Outlet } from 'react-router-dom';
import HomePage from './pages/Homepage';
import {Routes, Route } from "react-router-dom";
import SignUp from './pages/SignUp';
import Account from './components/account'
import Dashboard from './pages/dashboard';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/account" element={<Account/>} />
        <Route path="/about" element={<HomePage />} />
        <Route path="/contact" element={<HomePage/>} />
        <Route path="/register" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/jobs" element={<Dashboard/>} />
        
      </Routes>
      <Outlet/>

    <Footer/>
    </div>
  );
}

export default App;
