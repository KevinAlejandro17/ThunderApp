//HOME PAGE
import React from "react";

import Image1 from "./Images/home2.png";

import About from "./About";
import About2 from "./About2";
import Contact from "./Contact";
import Footer from "./Footer";

import { useEffect } from "react";
import "../../App.css";

import Navbar2 from "./Navbar2";

import { useNavigate } from "react-router-dom";
import { Box, Button, Grid, useMediaQuery, useTheme } from "@mui/material";

const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className="backPath">
      <Box>
        <Navbar2 />
        <Box
          sx={{
            mt: 12,
            px: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            container
            sx={{
              justifyContent: "center",
              alignItems: "center",
              direction: "column",
            }}
          >
            <Grid item>
              <h3
                style={{
                  fontWeight: "bold",
                  color: "#1a5c83",
                  textAlign: "left",
                  font: "montserrat",
                }}
              >
                Thunder App
              </h3>
              <h6
                className="card-subtitle mb-2 "
                style={{
                  fontSize: 20,
                  color: "#33b4db",
                  textAlign: "left",
                }}
              >
                Statistics of your customers
              </h6>
              <Grid item sx={{ mt: 2, mb: 2 }}>
                <p>
                  Una aplicación para generar facturas automáticas del consumo
                  de sus clientes
                </p>
              </Grid>
              <Grid container spacing={2} mt={4}>
                <Grid item>
                  <Button variant="contained"> Start free trial </Button>
                </Grid>
                <Grid item>
                  <Button variant="filled"> Learn More </Button>
                </Grid>
              </Grid>
            </Grid>
            {/* ======================= IMAGE ======================= */}
            {isMobile ? (
              <Grid item sx={{ mt: 4 }}>
                <img
                  src={Image1}
                  width="80%"
                  height="auto"
                  alt="logo"
                  alignItems="center"
                />
              </Grid>
            ) : (
              <Grid item xs={4}>
                <img
                  src={Image1}
                  width="80%"
                  height="auto"
                  alt="logo"
                  style={{ float: "right" }}
                />
              </Grid>
            )}
          </Grid>
        </Box>
        <Box sx={{ mt: 8 }}>
          <About />
        </Box>
      </Box>
    </div>
  );
};

{
  /* Other Components to HOME 


  <About />
         
          <Contact />
        </div>
        <Footer />
                </div>*/
}

export default Home;
// CODE BY GRACY PATEL
