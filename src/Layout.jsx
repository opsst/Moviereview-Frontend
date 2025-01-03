import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Routes, Outlet, Route, Link, useLocation} from "react-router-dom";
import RegisterForm from './RegisterForm';
import Login from './Login'

function Layout({setRole}) {
    const location = useLocation();
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    // ตรวจสอบว่า path เป็น /register หรือ /login
    useEffect(() => {
        if (location.pathname === "/register" || location.pathname === "/login") {
            setIsModalOpen(true);
        } else {
            setIsModalOpen(false);
        }
    }, [location]);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const openModal = (path) => {
        setIsModalOpen(true);
    };
  
    return (
    <div>
        <div className='Navbar'>
            <div className="Navbar-Logo">
              <img src="/image/Logo.png" alt="ThaiReview" width="100" height="67"/>
            </div>
            <nav className='Navbar-link'>
                  <li>
                      <Link to ="/">Home</Link>
                  </li>
                  <li>
                      <Link to ="/about">About</Link>
                  </li>
                  <li>
                      <Link to ="/profile">Profile</Link>
                  </li>
                  <li onClick={openModal}>
                      <span style={{ cursor: 'pointer' }}>Login</span>
                      <i className="fa-regular fa-user"></i>
                  </li>
            </nav>
          </div>
          <Outlet />
  
           {/* แสดงโมดอลหาก isModalOpen เป็น true */}
           {isModalOpen && (
                <>
                    {location.pathname === "/login" && <Login closeModal={closeModal} setRole={setRole} />}
                    {location.pathname === "/register" && <RegisterForm closeModal={closeModal} />}
                </>
            )}
    </div>
    )
  }

export default Layout;