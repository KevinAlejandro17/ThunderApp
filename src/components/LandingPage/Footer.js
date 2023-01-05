import React from "react";
import "../../App.css";
import Img1 from "./Images/logo.png";
import Img2 from "./Images/facebook-icon.png";
import Img3 from "./Images/twitter-3.png";
import Img4 from "./Images/instagram-2016.png";

import logo from "./Images/whiteLogo.png";

import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Paper,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

import { MDBRow } from "mdb-react-ui-kit";

const FooterSection = () => {
  return (
    <Grid item xs={12} sm={4} md={6}>
      <Card
        className="Card-info"
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          px: 2,
          py: 2,
          backgroundColor: "rgba(0, 0, 0, 0)",
        }}
      >
        <CardContent sx={{ textAlign: "center" }}>
          <img src={logo} alt="Logo" width="100px"></img>
        </CardContent>
      </Card>
    </Grid>
  );
};

const Footer = () => {
  const productsRows = [
    "Connections",
    "Protocols",
    "Personas",
    "Integrations",
    "Catalog",
    "Pricing",
    "Security",
  ];

  const forDevRows = ["Docs", "API", "Open Source", "Engineering Team"];

  const supportRows = [
    "Help Center",
    "Contact Us",
    "Security Bulletins",
    "Documentation",
    "Partner Portal",
  ];

  return (
    <>
      <Box className="Footer" sx={{ pt: 4, pb: 4, mt: 12 }}>
        <Container maxWidth="lg">
          <Grid
            container
            spacing={4}
            sx={{ justifyContent: "center", alignItems: "top", paddingX: 2 }}
          >
            <Grid item xs={12} sm={4} md={3}>
              <Card
                className="Card-info"
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  px: 2,
                  py: 2,
                  backgroundColor: "rgba(255, 255, 255, 0)",
                }}
              >
                <CardContent sx={{ textAlign: "center", position: "relative" }}>
                  <Grid
                    container
                    spacing={1}
                    sx={{
                      position: "absolute",
                      left: "0",
                    }}
                  >
                    <Grid item>
                      <Paper
                        sx={{
                          height: "5vh",
                          width: "5vh",
                          backgroundColor: "rgba(255,255,255,0)",
                        }}
                      >
                        <FacebookIcon
                          sx={{ fontSize: 36, color: "aliceblue" }}
                        />
                      </Paper>
                    </Grid>

                    <Grid item>
                      <Paper
                        sx={{
                          height: "5vh",
                          width: "5vh",
                          backgroundColor: "rgba(255,255,255,0)",
                        }}
                      >
                        <TwitterIcon
                          sx={{ fontSize: 36, color: "aliceblue" }}
                        />
                      </Paper>
                    </Grid>

                    <Grid item>
                      <Paper
                        sx={{
                          height: "5vh",
                          width: "5vh",
                          backgroundColor: "rgba(255,255,255,0)",
                        }}
                      >
                        <InstagramIcon
                          sx={{ fontSize: 36, color: "aliceblue" }}
                        />
                      </Paper>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4} md={6}>
              <Card
                className="Card-info"
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  px: 2,
                  py: 2,
                  backgroundColor: "rgba(0, 0, 0, 0)",
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <img src={logo} alt="Logo" width="100px"></img>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4} md={3}>
              <Card
                className="Card-info"
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  px: 2,
                  py: 2,
                  backgroundColor: "rgba(0, 0, 0, 0)",
                }}
              >
                <CardContent sx={{ textAlign: "center" }}></CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4} md={3}>
              <Card
                className="Card-info"
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  px: 2,
                  py: 2,
                  backgroundColor: "rgba(0, 0, 0, 0)",
                }}
              >
                <CardContent>
                  <h3>Products</h3>
                  {productsRows.map((product) => (
                    <Typography sx={{ fontSize: 14, py: 0.2 }}>
                      {product}
                    </Typography>
                  ))}
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4} md={3}>
              <Card
                className="Card-info"
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  px: 2,
                  py: 2,
                  backgroundColor: "rgba(0, 0, 0, 0)",
                }}
              >
                <CardContent>
                  <h3>For developers</h3>
                  {forDevRows.map((item) => (
                    <Typography sx={{ fontSize: 14, py: 0.2 }}>
                      {item}
                    </Typography>
                  ))}
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4} md={3}>
              <Card
                className="Card-info"
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  px: 2,
                  py: 2,
                  backgroundColor: "rgba(0, 0, 0, 0)",
                }}
              >
                <CardContent>
                  <h3>Support</h3>
                  {supportRows.map((item) => (
                    <Typography sx={{ fontSize: 14, py: 0.2 }}>
                      {item}
                    </Typography>
                  ))}
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4} md={3}>
              <Card
                className="Card-info"
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  px: 2,
                  py: 2,
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  alignItems: "center",
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <h3>Newsletter</h3>
                </CardContent>
                <TextField variant="standard" placeHolder="Email" />
              </Card>
            </Grid>

            <Grid item xs={12} sm={4} md={8}>
              <Card
                className="Card-info"
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  px: 2,
                  py: 2,
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="body"
                  textAlign="center"
                  fontFamily="montserrat"
                >
                  Una App que ofrece el servicio de gestión de usuario con
                  gráficas y estadísticas que muestran el consumo de sus
                  clientes y toda la información relevante que su empresa
                  necesite, también permite asignar roles para cada trabajador
                  de su empresa.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
export default Footer;
// CODE BY GRACY PATEL
