//HOME PAGE
import React from "react";
import Image1 from "./Images/home3.jpg";
import About from "./About";
import About2 from "./About2";
import { useEffect } from "react";
import Footer from "./Footer";
import "../../App.css";
import Contact from "./Contact";

import Navbar2 from "./Navbar2";

import { useNavigate } from "react-router-dom";
import { Box, Button, Grid } from "@mui/material";

const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const navigate = useNavigate();

  return (
    <div>
      <Navbar2 />
      <Box container sx={{ mt: 5, ml: 2, mr: 2 }}>
        <Grid
          container
          spacing={10}
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <Grid item>
            <h1
              style={{
                fontSize: 50,
                fontWeight: 800,
                color: "#1a5c83",
                textAlign: "left",
                font: "montserrat",
              }}
            >
              Thunder App
            </h1>

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
              <p className="para">
                Una aplicación para generar facturas automáticas del consumo de
                sus clientes
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

          <Grid item>
            <img className="d-block w-100" src={Image1} alt="Image1" />
          </Grid>
        </Grid>
      </Box>
      <div className="backPath">
        <div className="mainPage">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center head-flex">
              <div className="m-5">
                {/* Heading */}
                <h1
                  style={{
                    fontSize: 50,
                    fontWeight: 800,
                    color: "#1a5c83",
                    textAlign: "left",
                    font: "montserrat",
                  }}
                >
                  Thunder App
                </h1>
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

                {/* Data Para */}
                <p className="para pt-4 pb-4">
                  Una aplicación para generar facturas automáticas del consumo
                  de sus clientes
                </p>
                <div className="d-flex">
                  <button
                    type="button"
                    className="btn btn-secondary btn-rounded me-3"
                    onClick={() => navigate("/Login")}
                  >
                    <h6>Start Free Trial</h6>
                  </button>
                  <button
                    type="button"
                    className="btn btn-light btn-rounded me-3"
                    onClick={() => navigate("/About")}
                  >
                    <h6>Learn More</h6>
                  </button>
                </div>
              </div>
              <div className="m-5">
                <img className="d-block w-100" src={Image1} alt="Image1" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <About />
      </div>
      {/* Other Components to HOME */}
      {/*<About />
         
          <Contact />
        </div>
        <Footer />
                </div>*/}
    </div>
  );
};
export default Home;
// CODE BY GRACY PATEL
