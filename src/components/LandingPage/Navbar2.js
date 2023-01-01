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
} from "@mui/material";

import logo from "./Images/logo3.png";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
              <MenuIcon />
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
