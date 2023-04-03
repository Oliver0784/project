
import Nav from './components/Nav';
import Footer from './components/Footer';
import Login from './pages/Login'
import { Outlet } from 'react-router-dom';
import HomePage from './pages/Homepage';
import {Routes, Route } from "react-router-dom";
import SignUp from './pages/SignUp';
import Account from './components/account'
import JobList from './pages/JobList';
import Contacts from './pages/Contacts';
import Admin from './pages/admin ';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/account" element={<Account/>} />
        <Route path="/about" element={<HomePage />} />
        <Route path="/contact" element={<Contacts/>} />
        <Route path="/register" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/jobs" element={<JobList/>} />
        
      </Routes>
      <Outlet/>

    <Footer/>
    </div>
  );
}

export default App;
