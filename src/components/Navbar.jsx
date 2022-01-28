import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link, useNavigate } from "react-router-dom";
import { Badge, TextField } from "@mui/material";
import { Logout, ShoppingCart } from "@mui/icons-material";
import { ClientContext } from "../contexts/ClientProvider";
import { AuthContext } from "../contexts/AuthProvider";

import Signup from "../Signup";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const { authWithGoogle, user, logout } = React.useContext(AuthContext);

  const { cartCount } = React.useContext(ClientContext);
  const [path, setPath] = React.useState(window.location.pathname);
  React.useEffect(() => {
    setPath(window.location.pathname);
  }, [window.location.pathname]);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const search = new URLSearchParams(window.location.search);
  const navigate = useNavigate();
  const { getProducts } = React.useContext(ClientContext);
  const [searchValue, setSearchValue] = React.useState(search.get("q") || "");
  const [colorValue, setColorValue] = React.useState(search.get("color") || "");
  const [priceValue, setPriceValue] = React.useState(
    search.get("price_lte" || "")
  );

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const filterProducts = (key, value) => {
    search.set(key, value);
    let newPath = `${window.location.pathname}?${search.toString()}`;
    navigate(newPath);
    setSearchValue(search.get("q") || "");
    setColorValue(search.get("color") || "");
    setPriceValue(search.get("price_lte" || ""));
    getProducts();
  };

  return (
    <AppBar
      className="app-bar"
      position="absolute"
      style={{ background: "transparent", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <Button
              onClick={handleCloseNavMenu}
              variant={path === "/" ? "text" : "contained"}
              color="warning"
              sx={{
                my: 2,
                ml: 0,
                color: "gold",
                display: "block",
              }}
            >
              Goldentime
            </Button>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link to="/newscard">
              <Button
                onClick={handleCloseNavMenu}
                variant={path === "/" ? "text" : "contained"}
                color="warning"
                sx={{
                  my: 2,
                  ml: 2,
                  color: "white",
                  display: "block",
                }}
              >
                Товары
              </Button>
            </Link>
            <Link to="admin-panel-add">
              <Button
                variant={path === "/" ? "text" : "contained"}
                color="warning"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, ml: 3, color: "white", display: "block" }}
              >
                ADD PRODUCT
              </Button>
            </Link>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Link to="admin-panel">
                <Button
                  variant={path === "/" ? "text" : "contained"}
                  color="warning"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, ml: 4, color: "white", display: "block" }}
                >
                  ADMIN PANEL
                </Button>
              </Link>
            </Box>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Link to="/cart">
              <IconButton size="large" color="inherit">
                <Badge color="error" badgeContent={cartCount}>
                  <ShoppingCart color={path === "/" ? "light" : "warning"} />
                </Badge>
              </IconButton>
            </Link>
            {/* {user ? (
              <>
                <IconButton size="small" color="inherit">
                  {user.displayName}
                </IconButton>
                <IconButton sx={{ p: 0 }}>
                  <Avatar alt={user.displayName} src={user.photoURL} />
                </IconButton>
                <IconButton onClick={logout} size="large" color="inherit">
                  <Logout />
                </IconButton>
              </>
            ) : (
              <IconButton onClick={authWithGoogle} size="small" color="inherit">
                Войти
              </IconButton>
            )} */}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Link to="/login">
              <IconButton size="large" color="inherit">
                <Badge>
                  <Signup />
                </Badge>
              </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
