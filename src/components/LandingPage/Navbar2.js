import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import logo from "./Images/logo3.png";
import { Grid } from "@mui/material";
import About from "./About";
import HomeIcon  from '@mui/icons-material/Home';

function Navbar() {
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
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
