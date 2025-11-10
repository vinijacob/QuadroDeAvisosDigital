import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

// IMPORT PAGES
import LoginAluno from './pages/LoginAluno';
import Cadastro from './pages/Cadastro';
import Main from './pages/Main';
import LoginAdmin from './pages/LoginAdmin';
import AdminPage from './pages/AdminPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/cadastro' element={<Cadastro/>}/>
        <Route path='/loginAluno' element={<LoginAluno/>}/>
        <Route path='/loginAdmin' element={<LoginAdmin/>}/>
        <Route path='/adminPage' element={<AdminPage/>}/>
      </Routes>
    </Router>
  )
}