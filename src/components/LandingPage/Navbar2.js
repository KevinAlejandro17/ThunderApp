import * as React from "react";

import {
  AppBar,
  Box,
  Toolbar,
  Button,
  IconButton,
  Grid,
  useMediaQuery,
  useTheme,
  Menu,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { useState } from "react";

import logo from "./Images/logo3.png";

import MenuItem from "@mui/material/MenuItem";

import { useNavigate } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import InfoIcon from "@mui/icons-material/Info";
import EmailIcon from "@mui/icons-material/Email";
import LoginIcon from "@mui/icons-material/Login";

function Navbar() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [anchor, setAnchor] = useState(null);
  const open = Boolean(anchor);
  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: "#124265" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ paddingLeft: 2 }}
          >
            <img width="80" height="80" src={logo} alt="logo" />
          </IconButton>
          {isMobile ? (
            <Grid
              container
              spacing={2}
              sx={{
                justifyContent: "flex-end",
                paddingRight: 2,
                alignItems: "center",
              }}
            >
              <Button
                sx={{ color: "white" }}
                id="resources-button"
                onClick={handleClick}
                aria-controls={open ? "resources-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <MenuIcon />
              </Button>

              <Menu
                id="resources-menu"
                anchorEl={anchor}
                open={open}
                MenuListProps={{ "aria-labelledby": "resources-button" }}
                onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              >
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <HomeIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Home</ListItemText>
                </MenuItem>

                <MenuItem onClick={() => navigate("/About")}>
                  <ListItemIcon>
                    <InfoIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>About</ListItemText>
                </MenuItem>

                <MenuItem onClick={() => navigate("/Contact")}>
                  <ListItemIcon>
                    <EmailIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Contact us</ListItemText>
                </MenuItem>

                <MenuItem onClick={() => navigate("/Login")}>
                  <ListItemIcon>
                    <LoginIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Login</ListItemText>
                </MenuItem>
              </Menu>
            </Grid>
          ) : (
            <Grid
              container
              spacing={2}
              sx={{
                justifyContent: "flex-end",
                paddingRight: 2,
                alignItems: "center",
              }}
            >
              <Grid item>
                <Button color="inherit">About</Button>
              </Grid>
              <Grid item>
                <Button color="inherit">Contact us</Button>
              </Grid>
              <Grid item>
                <Button color="inherit">Login</Button>
              </Grid>
              <Grid item>
                <IconButton sx={{ color: "white" }}>
                  <HomeIcon />
                </IconButton>
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;