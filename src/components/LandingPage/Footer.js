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
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { makeStyles } from "@material-ui/core";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

import { MDBRow } from "mdb-react-ui-kit";

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

  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box className="Footer" sx={{ pt: 4, pb: 4, mt: 12 }}>
        <Container maxWidth="lg">
          <Grid
            container
            spacing={isMobile ? 1 : 4}
            sx={{ justifyContent: "center", alignItems: "top", paddingX: 2 }}
          >
            <Grid item xs={12} sm={4} md={3}>
              <Card
                variant="contained"
                className={isMobile ? classes.cardsMobile : classes.cards}
              >
                <CardContent sx={{ textAlign: "center", position: "relative" }}>
                  <Grid container>
                    <FacebookIcon sx={{ fontSize: 36, color: "aliceblue" }} />

                    <TwitterIcon sx={{ fontSize: 36, color: "aliceblue" }} />

                    <InstagramIcon sx={{ fontSize: 36, color: "aliceblue" }} />
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4} md={6}>
              <Card
                variant="contained"
                className={isMobile ? classes.cardsMobile : classes.cards}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <img src={logo} alt="Logo" width="100px"></img>
                </CardContent>
              </Card>
            </Grid>

            {isMobile ? undefined : (
              <Grid item xs={12} sm={4} md={3}>
                <Card />
              </Grid>
            )}

            <Grid item xs={isMobile ? 6 : 12} sm={4} md={3}>
              <Card
                variant="contained"
                className={isMobile ? classes.cardsMobile : classes.cards}
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

            <Grid item xs={isMobile ? 6 : 12} sm={4} md={3}>
              <Card
                variant="contained"
                className={isMobile ? classes.cardsMobile : classes.cards}
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

            <Grid item xs={isMobile ? 6 : 12} sm={4} md={3}>
              <Card
                variant="contained"
                className={isMobile ? classes.cardsMobile : classes.cards}
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

            <Grid item xs={isMobile ? 6 : 12} sm={4} md={3}>
              <Card
                variant="contained"
                className={isMobile ? classes.cardsMobile : classes.cards}
                sx={{ justifyContent: "center", alignItems: "center" }}
              >
                <CardContent>
                  <h3>Newsletter</h3>
                </CardContent>
                <Grid item xs={10}>
                  <TextField variant="standard" placeHolder="Email" />
                </Grid>
              </Card>
            </Grid>

            <Grid item xs={isMobile ? 8 : 12} sm={4} md={8}>
              <Card
                variant="contained"
                className={isMobile ? classes.cardsMobile : classes.cards}
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  fontSize={isMobile ? "14px" : "16px"}
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

const useStyles = makeStyles((theme) => ({
  cards: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    padding: 10,
    backgroundColor: "rgba(255, 255, 255, 0)",
  },

  cardsMobile: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    padding: 10,
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0)",
  },
}));
