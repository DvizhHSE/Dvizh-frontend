import { Link, useLocation } from "react-router-dom";
import { Grid, Typography, Box } from "@mui/material";
import { styled } from '@mui/system';
import { useTheme } from "@mui/material/styles";
import logo from '../assets/images/logo.png'

const StyledHeader = styled("header")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(2, 30),
  width: "100%",
  display: "flex", 
  marginBottom: theme.spacing(0.25),
  }));

const StyledNav = styled("nav")({
  display: "flex",
});

const StyledLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== "isActive",
})<{ isActive?: boolean }>(({ theme, isActive }) => ({
  position: "relative",
  color: theme.palette.text.primary,
  fontSize: "15px",
  display: "flex",
  marginRight: "25px",
  textDecoration: "none",
  fontWeight: isActive ? "600" : "400",

  "&::after": {
    content: '""',
    position: "absolute",
    left: isActive ? "0" : "50%",
    bottom: "-1em",
    width: isActive ? "100%" : "0",
    height: "3px",
    background: theme.palette.orange.main,
    transition: "width 0.5s ease, left 0.5s ease",
  },
  "&:hover": {
    color: theme.palette.orange.main,
    textDecoration: "none",           
  },
}));

const Header = () => {
  const theme = useTheme();
  const location = useLocation();
  const currentPath = location.pathname.split("/")[1] || "home";
  return (
    <StyledHeader>
      <Grid
        container
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box sx={{ flex: "0 0 auto", zIndex: "2", maxWidth: "100px",
        "& img": {
                  maxWidth: "100%",
                  width: "100%", 
                  height: "auto",
                  },
         }}>
          <Link to="/">
            <img style ={{zIndex: 1}} src={logo} alt="illustration" />
          </Link>
        </Box>
        <Box sx={{ ml: "auto" }}>
          <StyledNav>
            <StyledLink to="/home" isActive={currentPath === "home"}> Главная </StyledLink>
            <StyledLink to="/events" isActive={currentPath === "events"}>  Мероприятия </StyledLink>
            <StyledLink to="/personal-account" isActive={currentPath === "personal-account"}> Личный кабинет </StyledLink>
            <StyledLink to="/participants" isActive={currentPath === "participants"}>  Участники </StyledLink>
          </StyledNav>
        </Box>
      </Grid>
    </StyledHeader>
  );
};

export default Header;