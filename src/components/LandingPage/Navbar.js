//Navbar used MDB Bootstrap
import React, { useState } from "react";
import Img1 from "./Images/logo3.png";
import { animateScroll as scroll } from "react-scroll";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
  MDBIcon,
} from "mdb-react-ui-kit";

import { NavLink } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    // MDB NAVBAR
    <div style={{ marginBottom: '90px' }}>
      <MDBNavbar
        className="navbar fixed-top navbar-expand-xl"
      >
        <MDBContainer>
          {/* Scroll yo top */}
          <NavLink href="/" onClick={toggleHome}>
            <img
              className="d-block"
              src={Img1}
              width="80"
              height="80"
              alt="LOGO MAIN"
            />
          </NavLink>
  
            <MDBNavbarNav className="d-flex justify-content-end">
              <MDBNavbarItem className="p-3">
                {/* Other Navbar Items */}
                <NavLink to="/About" className="navText">
                  About
                </NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem className="p-3">
                <NavLink to="/Contact" className="navText">
                  Contact Us
                </NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem className="p-3">
                <NavLink to="/Login" className="navText">
                  Login
                </NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem className="m-2">
                <NavLink to="/" onClick={toggleHome}>
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-rounded ps-5 pe-5"
                    data-mdb-ripple-color="dark"
                    color="white"
                  >
                    <HomeIcon style={{ color: "white" }} />
                  </button>
                </NavLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}

export default Navbar;