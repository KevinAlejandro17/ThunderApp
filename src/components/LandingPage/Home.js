//HOME PAGE
import React from "react";

import About from "./About";
import About2 from "./About2";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Banner from "./Banner";

import { useEffect } from "react";
import "../../App.css";

import { Box } from "@mui/material";

const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="backPath">
      <Box>
        <Navbar />
        <Banner />
        <Box sx={{ mt: 8 }}>
          <About />
          <About2 />
        </Box>
      </Box>
    </div>
  );
};

export default Home;
// CODE BY GRACY PATEL
