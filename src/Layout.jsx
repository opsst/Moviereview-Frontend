import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Outlet,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Login from "./Login";
import localStorage from "./services/localStorageService";
import { useNavigate } from "react-router-dom"; // เพิ่มการนำเข้า useNavigate

function Layout({ setRole, isLoggedIn, setIsLoggedIn }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleLogout = () => {
    localStorage.removeItem("token"); // ลบ token ออกจาก localStorage
    setRole("guest");
    setIsLoggedIn(false); // บอก parent ว่าล็อกเอาท์แล้ว
    navigate("/");
  };

  const handleLoginLogoutClick = () => {
    console.log("Leo", isLoggedIn);
    if (isLoggedIn) {
      handleLogout();
    } else {
      openModal();
    }
  };

  return (
    <div>
      <div className="Navbar">
        <div className="Navbar-Logo">
          <img src="/image/Logo.png" alt="ThaiReview" width="100" height="67" />
        </div>
        <nav className="Navbar-link">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li onClick={handleLoginLogoutClick}>
            <span style={{ cursor: "pointer" }}>
              {isLoggedIn ? "Logout" : "Login"}
            </span>
            <i className="fa-regular fa-user"></i>
          </li>
        </nav>
      </div>

      {/* Renders the child route(s) */}
      <Outlet />

      {/* Login modal (only if isModalOpen == true) */}
      {isModalOpen && (
        <Login
          closeModal={closeModal}
          setRole={setRole}
          setIsLoggedIn={(val) => {
            console.log("LAYOUT: setIsLoggedIn got called with", val);
            setIsLoggedIn(val);
          }}
        />
      )}
    </div>
  );
}

export default Layout;
