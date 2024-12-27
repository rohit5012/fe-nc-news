import { Link } from "react-router-dom";
import "./Header.css";
import * as React from "react";
import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";

const settings = ["Login"];

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#2b2d42") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("10rem");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      // className={scrolling ? "navbar-scroll" : ""}
      position="fixed"
      sx={{
        backgroundColor: navColor,
        height: navSize,
        zIndex: "100",
        padding: "0 50px",
        boxShadow: "0px 0px",
      }}
    >
      {/* <Container> */}
      <Toolbar disableGutters>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 7,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            textDecoration: "none",
          }}
        >
          {/* <img src={logo} width={60} height={40}></img> */}
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
          >
            <MenuIcon style={{ color: "#e6ccb2" }} />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography sx={{ textAlign: "center", color: "#003049" }}>
                <Link to="/" className="header_link">
                  Home
                </Link>
                <br></br>
                <Link to="/articles" className="header_link">
                  Articles
                </Link>
                <br></br>
                <Link to="/topics" className="header_link">
                  Topics
                </Link>
              </Typography>
            </MenuItem>
          </Menu>
        </Box>

        <Typography
          variant="h5"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            textDecoration: "none",
          }}
        >
          {/* <img src={logo} width={60} height={50}></img> */}
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <Link to="/" className="header_link">
            Home
          </Link>
          <Link to="/articles" className="header_link">
            Articles
          </Link>
          <Link to="/topics" className="header_link">
            Topics
          </Link>
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          <Link to="/user-login" className="header_link">
            {settings.map((setting) => (
              <MenuItem key={setting}>
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "#bc4749",
                    backgroundColor: "#eae0d5",
                    width: "80px",
                    fontWeight: "bold",
                  }}
                >
                  {setting}
                </Typography>
              </MenuItem>
            ))}
          </Link>
        </Box>
      </Toolbar>
      {/* </Container> */}
    </AppBar>
  );
}
export default Header;
