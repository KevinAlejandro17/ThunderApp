import React, { useState, useEffect } from "react";
import {
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Tooltip,
  Avatar,
  Menu,
  MenuItem,
  Grid,
  Button,
} from "@mui/material";

import Logout from "@mui/icons-material/Logout";
import Settings from "@mui/icons-material/Settings";

import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

const UserMenu = () => {
  const loggedInUser = window.localStorage.getItem("loggedInUser");
  const userJson = JSON.parse(loggedInUser);
  const name = loggedInUser
    ? userJson.firstName + " " + userJson.lastName
    : null;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  const logoutConfirmation = () => {
    Swal.fire({
      title: "Espera",
      text: "¿Estás seguro que quieres cerrar sesión?",
      icon: "info",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "Cerrar sesión",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#E05454",
    }).then((result) => {
      if (result.isConfirmed) {
        window.localStorage.removeItem("loggedInUser");
        window.localStorage.removeItem("clientBill");
        if (window.location.pathname !== "/") {
          navigate("/");
        } else {
          window.location.reload();
        }
      }
    });
  };

  return (
    <React.Fragment>
      {!loggedInUser ? (
        window.location.pathname === "/Login" ? undefined : (
          <Grid item>
            <Button
              onClick={() => navigate("/Login")}
              sx={{
                color: "white",
                fontWeight: 550,
                fontFamily: "Montserrat",
                mt: 2,
                ":hover": {
                  bgcolor: "lightblue",
                  color: "white",
                },
              }}
            >
              Ingresar
            </Button>
          </Grid>
        )
      ) : (
        <div>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              pt:
                window.location.pathname === "/Cliente" ||
                window.location.pathname === "/Operador" ||
                window.location.pathname === "/Gerente"
                  ? 0
                  : 2,
            }}
          >
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar sx={{ width: 36, height: 36, bgcolor: "#33b4db" }}>
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: 18,
                      fontFamily: "Montserrat",
                    }}
                  >
                    {name.substring(0, 1)}
                  </span>
                </Avatar>
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            sx={{
              "& .MuiPaper-root": {
                backgroundColor: "aliceblue",
              },
            }}
            PaperProps={{
              elevation: 0,
              fontFamily: "Montserrat",
              sx: {
                overflow: "hidden",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  ml: -0.5,
                  mr: 1,
                },
                "& .MuiMenuItem-root": {
                  fontFamily: "Montserrat",
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "bottom" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem>
              <Avatar sx={{ bgcolor: "#33b4db", width: 32, height: 32 }} />
              {
                <span style={{ color: "gray", fontWeight: "bold" }}>
                  {name}
                </span>
              }
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <Avatar sx={{ width: 28, height: 28 }} />
              </ListItemIcon>
              Mi cuenta
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Ajustes
            </MenuItem>
            <Divider />
            <MenuItem onClick={logoutConfirmation}>
              <ListItemIcon>
                <Logout fontSize="small" sx={{ color: "#E2062C" }} />
              </ListItemIcon>
              <span style={{ color: "#E2062C" }}>Cerrar sesión</span>
            </MenuItem>
          </Menu>
        </div>
      )}
    </React.Fragment>
  );
};

export default UserMenu;
