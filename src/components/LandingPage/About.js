//About Page 1
import React from "react";
import "../../App.css";
//Image import
import Image2 from "./Images/timeline.png";
import Image3 from "./Images/newsletter-dev.png";
import Image4 from "./Images/chart-bar-33.png";
import About2 from "./About2";
import { useEffect } from "react";
import Navbar from "./Navbar2.js";
import MenuIcon from '@mui/icons-material/Menu';

import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { AccountTree, BarChart, IntegrationInstructions } from "@mui/icons-material";

const About = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="mainPage mb-9">
      <Navbar/>
      {/*<div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center">
          <div className="m-5 textView pt-3">
            <h2
              className="h2head"
              style={{
                fontWeight: 800,
                fontFamily: "montserrat",
              }}
            >
              Estadísticas de consumo
            </h2>
            <p
              className="textAbout pt-4 pb-4 text-center"
              style={{
                fontFamily: "montserrat",
              }}
            >
              Esta aplicación permite gestionar toda la información necesaria
              sobre el consumo de sus clientes con gráficas, tablas de consumo,
              diagramas que muestran de manera gráfica todos los datos
            </p>
          </div>
        </div>
        
        <div className="d-flex align-content-between justify-content-center flex-wrap">
          <div className="m-3 viewCard">
            <img className="d-block" src={Image2} alt="Image1" />
            <div className="cardH1 pt-5">
              <h3
                style={{
                  fontFamily: "montserrat",
                  fontSize: 24,
                  fontWeight: "bold",
                }}
              >
                Datos en tiempo real
              </h3>
              <p
                className="pt-3 cardText"
                style={{
                  fontSize: 18,
                  fontFamily: "montserrat",
                }}
              >
                Recopila datos en tiempo real de múltiples canales y los mueve
                en un lago de datos, para mostrarlos de manera gráfica.
              </p>
            </div>
          </div>
          
          <div className="m-3 viewCard">
            <img className="d-block" src={Image3} alt="icon" />
            <div className="cardH1 pt-5">
              <h3
                style={{
                  fontFamily: "montserrat",
                  fontSize: 24,
                  fontWeight: "bold",
                }}
              >
                Algoritmos poderosos
              </h3>
              <p
                className="pt-3 cardText"
                style={{
                  fontSize: 18,
                  fontFamily: "montserrat",
                }}
              >
                Con la ayuda de poderosos algoritmos, reglas de calidad y
                técnicas, podemos obtener datos de manera simplificada.
              </p>
            </div>
          </div>
      
          <div className="m-8 viewCard">
            <img className="d-block" src={Image4} alt="Imageq" />
            <div className="cardH1 pt-5">
              <h3
                style={{
                  fontFamily: "montserrat",
                  fontSize: 24,
                  fontWeight: "bold",
                }}
              >
                Información empresarial
              </h3>
              <p
                className="pt-3 cardText"
                style={{
                  fontSize: 18,
                  fontFamily: "montserrat",
                }}
              >
                Recopile datos limpios procesados que estén listos para ser
                analizados para recopilar valiosos conocimientos empresariales.
              </p>
            </div>
          </div>
        </div>
      </div>*/}

      <Container sx={{ py: 8, mt: 8, px: 6 }} maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              className="Card-info"
              variant="filled"
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                px: 2,
                py: 2,
              }}
            >
              <AccountTree
                fontSize="large"
                sx={{ ml: 1.2, mb: 2, color: "#52C41A" }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h5"
                  component="h2"
                  sx={{ mb: 2, fontWeight: "bold" }}
                >
                  Datos en tiempo real
                </Typography>
                <Typography className="cardText">
                  Recopile datos limpios procesados ​que estén listos para ser
                  analizados para recopilar valiosos conocimientos
                  empresariales.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              className="Card-info"
              variant="filled"
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                px: 2,
                py: 2,
              }}
            >
              <IntegrationInstructions
                fontSize="large"
                sx={{ ml: 1.2, mb: 2, color: "#F5222D" }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h5"
                  component="h2"
                  sx={{ mb: 2, fontWeight: "bold" }}
                >
                  Algoritmos poderosos
                </Typography>
                <Typography className="cardText">
                  Con la ayuda de poderosos algoritmos, reglas de calidad y
                  técnicas, podemos obtener datos de manera simplificada.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              className="Card-info"
              variant="filled"
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                px: 2,
                py: 2,
              }}
            >
              <BarChart
                fontSize="large"
                sx={{ ml: 1.2, mb: 2, color: "#1890FF" }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h5"
                  component="h2"
                  sx={{ mb: 2, fontWeight: "bold" }}
                >
                  Información empresarial
                </Typography>
                <Typography className="cardText">
                  Recopile datos limpios procesados que estén listos para ser
                  analizados para recopilar valiosos conocimientos
                  empresariales.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
export default About;
// CODE BY GRACY PATEL
