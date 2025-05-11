import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import { Grid2, Button } from "@mui/material";
import { height, styled } from '@mui/system';
import { useTheme } from "@mui/material/styles";
import { Typography, Box } from '@mui/material';
import picture from '../assets/images/mainPagePeople.png';
import logo from '../assets/images/logo.png';
import activities from '../assets/images/mainPageActivities.png';


const ImageContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  position: "relative",
  maxWidth: "680px",
  width: "100%",
  height: "100%",
  textAlign: "center",
  alignItems: "center",
  "& img": {
    maxWidth: "100%",
    width: "100%", 
    height: "auto",
  },
}));

const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: "none",
    color: theme.palette.text.white
}));

const StartButton = styled(Button)(({ theme }) => ({
  fontSize: "20px",
  display: "inline-block",
  padding: theme.spacing(3, 26),
  backgroundColor: theme.palette.purple.main,
  color: theme.palette.text.white
}))



const HeroSection = () => {
const theme = useTheme();
  return (
    <Box>
    <Grid2 container spacing={20}
    sx={{padding: theme.spacing(15, 35),
    height : "100vh",
    background: theme.palette.background.paper
    }}>
        <Grid2 size={{ xs: 12, md: 6 }}>  
        <Box sx={{display: "flex",
            position: "relative",
            maxWidth: "300px",
            width: "100%",
            "& img": {
                maxWidth: "100%",
                width: "100%", 
                height: "auto",
            },
            }}> 
                <img style ={{zIndex: 1}} src={logo} alt="illustration" />
            </Box>

            <Box 
            sx={{ 
                display: "flex",  
                alignItems: "center", 
                width: "100%", 
                paddingTop: theme.spacing(8)
            }}
            >
                <Typography sx={{ color: theme.palette.text.primary, fontSize: "50px", fontWeight: "800"}}>
                Платформа для создания и участия в мероприятиях
                </Typography>
            </Box>

            <Box 
            sx={{ 
                display: "flex",  
                alignItems: "center", 
                width: "100%", 
                paddingTop: theme.spacing(8)
            }}
            >
                <Typography 
                sx={{ color: theme.palette.text.primary,
                fontSize: "25px",
                fontWeight: "600",
                opacity: "0.8"
                }}>
                Создавай. Участвуй. Развивайся.
                </Typography>
            </Box>
            <Box 
                sx={{ 
                    display: "flex",  
                    alignItems: "center", 
                    width: "100%", 
                    paddingTop: theme.spacing(8)
                }}
                >
                <StyledLink to="/">
                <StartButton sx={{boxShadow : 3}} >
                Начать
                </StartButton>
                </StyledLink>
            </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
            <ImageContainer>
            <img style ={{zIndex: 1}} src={picture} alt="illustration" />
            </ImageContainer> 
        </Grid2>
    </Grid2>

    <Grid2 container
    sx={{
    height : "100vh",
    padding: theme.spacing(19, 26),
    background: theme.palette.background.default
    }}>
        <Box sx={{display: "flex",  
                justifyContent: "center",
                width: "100%"}} >
            <Typography sx={{ color: theme.palette.text.primary,
                fontSize: "45px",
                fontWeight: "600",
                }}>
            На этой платформе вы можете:
            </Typography >
        </Box>
        <Grid2 sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            paddingBottom: theme.spacing(6)
            }}>
            <img src={activities} alt="illustration" 
            style={{
                width: "100%",
                maxWidth: "1250px",
                height: "auto",
                zIndex: 1,
            }} 
        />
        </Grid2>

    </Grid2>
    </Box>
  );
};

export default HeroSection;
