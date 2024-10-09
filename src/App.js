import './App.scss';
import {BrowserRouter as Router, Routes, Outlet, Route, Link} from "react-router-dom";
import Homepage from './homepage';
import Profile from './profile';
import Createplaylist from './component/profile/createplaylist';
import Movieinfo from './movieinfo';


function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Homepage />}/>
              <Route path="playlist" element={<Createplaylist />} />
              <Route path="about" element={<About />} />
              <Route path="profile" element={<Profile />} />
              <Route path="movieinfo" element={<Movieinfo />} />
            </Route> 
          </Routes>
        </Router>
    </div>
  );
}

function Layout() {
  return (
  <div>
      <div className='Navbar'>
          <div className="Navbar-Logo">
            <img src="/image/Logo.png" width="100" height="67"/>
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
                <li>
                    <Link to ="/login">Login</Link>
                    <i class="fa-regular fa-user"></i>
                </li>
          </nav>
        </div>
        <Outlet />
  </div>
  )
}

function About() {
  return (
  <div>
    <h2>About</h2>
    <h2>About</h2>
  </div>
  );
}

export default App;
