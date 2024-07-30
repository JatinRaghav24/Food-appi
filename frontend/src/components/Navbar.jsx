import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import "../CSS/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../context/Storecontext";

export const Navbar = ({ setLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getSubTotal, token, setToken } = useContext(StoreContext);
const navigate = useNavigate();

  const logout = ()=>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/")

  }
  return (
    <div className="navbar">
      <Link to="/">
        <h2 className="logo">
          FOOD<span>18.</span>
        </h2>
      </Link>
      <ul>
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("track")}
          className={menu === "track" ? "active" : ""}
        >
          App Download
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact")}
          className={menu === "contact" ? "active" : ""}
        >
          Contact
        </a>
      </ul>
      <div className="right-nav">
        <img src={assets.search_icon} alt="" className="search" />
        <div className="nav-basket">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getSubTotal() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? (
          <button onClick={() => setLogin(true)} className="nav-sub">
            Sign In
          </button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="" />
            <ul className="new-profile-dropdown">
              <li onClick={()=>navigate('/myorders')}>
                <img src={assets.bag_icon} alt="" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
