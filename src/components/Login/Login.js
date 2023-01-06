import React from "react";
import "./Login.css";
import Navbar from "../LandingPage/Navbar.js";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import logo from "../LandingPage/Images/logo2.png";
import { verifyUser } from "../UserList/UserAPI";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

function AdminLogin() {
  const [id, setId] = useState(0);
  const [password, setPassword] = useState("");
  const [respuesta, setRespuesta] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    var ans = await verifyUser(id, password, role);
    var res = await ans.json();
    console.log(res);
    setRespuesta(res.message);
  }

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ mt: "80px" }}>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item md={6} sx={{ px: 12 }}>
            <div className="d-flex flex-column ms-3">
              <div className="text-center">
                <img
                  src={logo}
                  style={{
                    width: "100px",
                    marginTop: "59px",
                    marginBottom: "30px",
                  }}
                  alt="logo"
                />
              </div>
              <p>Por favor ingresa a tu cuenta</p>
              <div>
                {respuesta && respuesta !== "Success" ? (
                  <div className="alert alert-danger" role="alert">
                    Los datos que ingresó no son correctos
                  </div>
                ) : respuesta === "Success" && role === "Cliente" ? (
                  navigate(`/Cliente/`)
                ) : respuesta === "Success" && role === "Operador" ? (
                  navigate(`/Operador`)
                ) : respuesta === "Success" && role === "Gerente" ? (
                  navigate(`/Gerente`)
                ) : respuesta === "Success" && role === "Admin" ? (
                  navigate("/Dashboard")
                ) : (
                  <div></div>
                )}
              </div>

              <MDBInput
                wrapperClass="mb-3"
                label="ID"
                id="form1"
                onChange={(event) => setId(event.target.value)}
              />
              <MDBInput
                wrapperClass={isMobile ? "mb-3" : "mb-1"}
                label="Password"
                id="form2"
                type="password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />

              <select
                className="w-100 mb-3 select"
                id="role"
                onChange={(e) => setRole(e.target.value)}
              >
                <option selected={true} disabled="disabled">
                  {isMobile ? (
                    <>Seleccione el rol</>
                  ) : (
                    <>Seleccione el rol a desempeñar</>
                  )}
                </option>
                <option value="Cliente">Cliente</option>
                <option value="Gerente">Gerente </option>
                <option value="Operador">Operador</option>
                <option value="Admin">Administrador</option>
              </select>
              <div className="text-center mb-5 pb-1">
                <MDBBtn
                  className="mb-4 mt-3 w-100 gradient-custom-2"
                  type="submit"
                >
                  Ingresar
                </MDBBtn>
                <a className="text-muted" href="#!">
                  Olvidaste tu contraseña?
                </a>
              </div>
            </div>
          </Grid>

          {isMobile ? (
            <></>
          ) : (
            <Grid item md={6}>
              <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100">
                <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                  <Typography
                    variant="h5"
                    fontFamily="Montserrat"
                    fontWeight="bold"
                    mb={3}
                  >
                    Somos más que sólo una compañía
                  </Typography>
                  <Typography className="small mb-0" fontFamily="Montserrat">
                    Una empresa de energía eléctrica que desarrolla un sistema
                    para gestionar la información de sus clientes ya sean
                    corporativos o personas naturales, su consumo y la
                    facturación.
                  </Typography>
                </div>
              </div>
            </Grid>
          )}
        </Grid>
      </form>
    </Box>
  );
}

export default AdminLogin;
