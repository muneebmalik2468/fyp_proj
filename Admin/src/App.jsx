import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Admin from "./pages/admin/Admin";
import Login from "./pages/login/Login";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

 
  useEffect(() => {
    const token = localStorage.getItem('auth-token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  
  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('auth-token', 'true'); 
  };

  
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('auth-token');
    localStorage.removeItem('isLoggedIn');
    window.location.href = "/"; 
  };

  return (
    <div>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <Navbar onLogout={handleLogout} />
          <Admin />
        </>
      )}
    </div>
  );
};

export default App;
