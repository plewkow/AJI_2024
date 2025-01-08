import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import MainPage from './pages/MainPage';
import RegisterPage from './pages/RegisterForm';
import RegisterSuccess from './pages/RegisterSuccess';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to="/main" /> : <WelcomePage onLogin={handleLogin} />}
        />

        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/main" /> : <WelcomePage onLogin={handleLogin} />}
        />

        <Route
          path="/main"
          element={isLoggedIn ? <MainPage onLogout={handleLogout} /> : <Navigate to="/" />}
        />

        <Route
          path="/register"
          element={isLoggedIn ? <Navigate to="/main" /> : <RegisterPage />}
        />

        <Route
          path="/registerSuccess"
          element={<RegisterSuccess />}
        />
      </Routes>
    </div>
  );
};

export default App;
