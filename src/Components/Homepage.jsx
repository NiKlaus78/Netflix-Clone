import React from "react";
import "./Homepage.css";
import NetflixNavbar from "./NetflixNavbar";
import { useNavigate } from "react-router-dom";
import netflixLogo from "../images/Logonetflix.png";
import Navbar from "./Navbar";

const Homepage = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/all-movies");
  }
  return (
    <div>
      {/* <NetflixNavbar noUser={true} /> */}
      <Navbar noUser={true} />
      <div className="login-container">
        <div className="form-container body">
          <img src={netflixLogo} alt="Netflix Logo" className="logo" />
          <div className="form-group">
            <input type="text" placeholder="Email or phone number" />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" />
          </div>
          <button onClick={handleClick} className="button">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
