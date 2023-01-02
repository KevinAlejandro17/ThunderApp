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
    <Box container>
      <Navbar2 />
      <Box container sx={{ mt: 5, px:5}}>
        <Grid
          container
          spacing={10}
          sx={{ justifyContent: "center", alignItems: "center" }}
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
        </Grid>
      </Box>
    </Box>
  );
};
{
  /* Other Components to HOME */
}
{
  /*<About />
         
          <Contact />
        </div>
        <Footer />
                </div>*/
}

export default Home;
// CODE BY GRACY PATEL
