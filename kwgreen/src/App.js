// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Login from './routes/Login';
import Register from './routes/Register';
import AdminHome from './pages/Admin/AdminHome';
import AddUser from './pages/Admin/AddUser';
import UserHome from './pages/User/UserHome'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" default element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/adminhome" element={<AdminHome />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/userhome" element={<UserHome />} />
        <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
        
        </Routes>
    </div>
  );
}

export default App;
