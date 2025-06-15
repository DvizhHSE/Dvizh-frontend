import { Grid, Typography, Box } from "@mui/material";
import { styled } from '@mui/system';
import { useTheme } from "@mui/material/styles";
import logo from '../assets/images/logo_white.png';
import text from '../assets/images/textForFooter.png'

const Footer = () => {
    const theme = useTheme();
      return (
        <Grid sx={{display: "flex", 
            justifyContent: "space-between",
            alignItems: "center", 
            padding: theme.spacing(5, 35),
            width: "99vw",
            background: theme.palette.orange.three}} >
                <Box sx={{display: "flex",
                    maxWidth: "130px",
                    width: "100%",
                    "& img": {
                        maxWidth: "100%",
                        width: "100%", 
                        height: "auto",
                    },
                    }}> 
                        <img style ={{zIndex: 1}} src={text} alt="illustration1" />
                    </Box>

                <Box sx={{display: "flex",
                    maxWidth: "70px",
                    width: "100%",
                    "& img": {
                        maxWidth: "100%",
                        width: "100%", 
                        height: "auto",
                    },
                    }}> 
                        <img style ={{zIndex: 1}} src={logo} alt="illustration2" />
                    </Box>
        </Grid>
      );
    };
    export default Footer;