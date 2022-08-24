import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Info from './components/Info';
import './styles/styles.css';

function App() {
  return (
    <Router>
      <h1>Welcome to our website!</h1>
      <Nav />
      <Routes>
        <Route path="/" />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </Router>
  );
}

export default App;
