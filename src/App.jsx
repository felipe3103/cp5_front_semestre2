import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Produtos from './components/Produtos';
import TabelaPrecos from './components/TabelaPrecos';
import './index.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/tabela-precos" element={<TabelaPrecos />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
