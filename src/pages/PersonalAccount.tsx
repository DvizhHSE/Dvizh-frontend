import { Grid, Typography, Box, Accordion, AccordionSummary, AccordionDetails, } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import { styled } from '@mui/system';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import EventCard from "../components/EventCard";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import eventImage from '../assets/images/event-image.png';
import eventImage2 from '../assets/images/event-image-2.png';
import eventImage3 from '../assets/images/event-image-3.png';
import eventImage4 from '../assets/images/event-image-4.png';
import eventImage5 from '../assets/images/event-image-5.png';
import eventImage6 from '../assets/images/event-image-6.png';
import eventImage7 from '../assets/images/event-image-7.png';
import eventImage8 from '../assets/images/event-image-8.png';
import eventImage9 from '../assets/images/event-image-9.png';

const eventCards = [
    { id: 1, image: eventImage },
    { id: 2, image: eventImage2 },
    { id: 3, image: eventImage3 },
    { id: 4, image: eventImage4 },
    { id: 5, image: eventImage5 },
    { id: 6, image: eventImage6 },
    { id: 7, image: eventImage7 },
    { id: 8, image: eventImage8 },
    { id: 9, image: eventImage9 }
  ];

  const PersonalAccount = () => {
    const theme = useTheme();

    return (
        <Box sx={{ 
          width: '99vw', 
          minHeight: '100vh',
          margin: 0,
          padding: theme.spacing(5, 30),
          overflow: 'auto',
          background: theme.palette.background.default
        }}>
            <Typography sx={{
            fontSize: "52px",
            fontWeight: "800",

            }}>
            Личный кабинет 
            </Typography>

            <Accordion disableGutters elevation={0} 
                sx={{
                background: "none",
                "&::before": { display: "none" }
                }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{fontSize: "3rem", color: theme.palette.orange.main}} />}
                sx={{
                    "&.Mui-focusVisible": {
                      outline: "none",
                    },
                    "&:focus": {
                      outline: "none",
                    },
                  }}>
                <Typography sx={{ fontWeight: "bold", fontSize: "40px" }}>Личные данные</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Grid sx={{background: theme.palette.background.paper}}>
                    
                </Grid>
                </AccordionDetails>
            </Accordion>

            <Accordion disableGutters elevation={0} 
                sx={{
                background: "none",
                "&::before": { display: "none" }
                }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{fontSize: "3rem", color: theme.palette.orange.main}} />}
                sx={{
                    "&.Mui-focusVisible": {
                      outline: "none",
                    },
                    "&:focus": {
                      outline: "none",
                    },
                  }}>
                <Typography sx={{ fontWeight: "bold", fontSize: "40px" }}>Ваши мероприятия</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>Список ваших мероприятий появится здесь.</Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion disableGutters elevation={0} 
                sx={{
                background: "none",
                "&::before": { display: "none" }
                }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{fontSize: "3rem", color: theme.palette.orange.main}} />}
                sx={{
                    "&.Mui-focusVisible": {
                      outline: "none",
                    },
                    "&:focus": {
                      outline: "none",
                    },
                  }}>
                <Typography sx={{ fontWeight: "bold", fontSize: "40px" }}>Ваши достижения</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>Ваши награды и достижения будут здесь.</Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
};

export default PersonalAccount; 