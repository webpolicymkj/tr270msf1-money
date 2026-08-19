import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';

import logoImg from './assets/logo.png';


import bannerApp from './assets/app/bannerApp.png';


import PolicyPage from './PolicyPage';

function Header() {
  const location = useLocation();
  const isPolicyPage = location.pathname === '/policy';

  return (
      <header className="header">
          <div className="container header-container">
            <div className="header-left">
              <div className="logo-wrapper">
                <img src={logoImg} alt="Money Budget: Expense Planner" className="logo-img" />
                <span className="studio-name">Money Budget: Expense Planner</span>
              </div>
            </div>

            {!isPolicyPage && (
              <nav className="nav">
                <Link to="/" className="nav-link">HOME</Link>
                <Link to="/policy" className="nav-link">POLICY</Link>
              </nav>
            )}
          </div>
        </header>
  );
}

function HomePage() {
  return (
    <>
      <section id="about" className="section about">
        <div className="container about-row">
          <div className="about-text-container">
            <h2 className="highlight-title">Money Budget: Expense Planner</h2>
            <p className="about-text">Money Budget: Expense Planner is a simple, reliable, and easy-to-use personal finance app. It helps you manage your money with confidence — tracking everyday income and expenses, planning budgets, and understanding your spending through clear statistics. The app is designed with privacy and user experience in mind, keeping your financial data on your own device while delivering intuitive navigation and practical value.
            </p>
          </div>
          <div className="about-img-container">
            <img src={bannerApp} alt="Money Budget: Expense Planner" className="about-img" />
          </div>
        </div>
      </section>

    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/policy" element={<PolicyPage />} />
        </Routes>
        <footer className="footer">
          <div className="container text-center">
            <p>&copy; {new Date().getFullYear()} Money Budget: Expense Planner. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
