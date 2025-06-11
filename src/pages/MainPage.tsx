import { Grid, Typography, Box } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import { styled } from '@mui/system';
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import EventCard from "../components/EventCard";
import eventImage from '../assets/images/event-image.png';
import eventImage2 from '../assets/images/event-image-2.png';
import eventImage3 from '../assets/images/event-image-3.png';
import eventImage4 from '../assets/images/event-image-4.png';
import eventImage5 from '../assets/images/event-image-5.png';
import eventImage6 from '../assets/images/event-image-6.png';
import eventImage7 from '../assets/images/event-image-7.png';
import eventImage8 from '../assets/images/event-image-8.png';
import eventImage9 from '../assets/images/event-image-9.png';

const StyledSwiper = styled(Swiper)(({ theme }) =>({
    "& .swiper-button-next, & .swiper-button-prev": {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    color: theme.palette.orange.main,
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    },

    "& .swiper-button-next::after, & .swiper-button-prev::after": {
    fontSize: "40px",
    fontWeight: 800,
    },

    "& .swiper-button-next": {
    top: "40%", 
    right: "10px",
    transform: "translateY(-50%)",
    },

    "& .swiper-button-prev": {
    top: "40%",
    left: "10px",
    transform: "translateY(-50%)",
    },
  }))

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

const MainPage = () => {
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
        Главная 
        </Typography>

        <Grid container sx={{paddingTop: "10px", width : "100"}}>
            <Grid size={{ xs: 12 }} sx={{width: "100%"}}>
                <Typography sx={{
                    fontSize: "40px",
                    color: theme.palette.orange.main,
                    fontWeight: "700",
                    paddingBottom: theme.spacing(4)
                }}>
                Избранное
                </Typography>
            </Grid>
            <Grid sx={{width: "100%"}}>
                <StyledSwiper
                modules={[Navigation]}
                navigation
                slidesPerView={4}
                spaceBetween={20}
                style={{ width: "100%" }}
                >
                {eventCards.map((card) => (
                    <SwiperSlide key={card.id} style={{ display: "flex", justifyContent: "center" }}>
                    <EventCard
                        category="Категория"
                        name="Название"
                        location="Где-то"
                        data="12 июня, 13:00"
                        imageUrl={card.image}
                    />
                </SwiperSlide>
            ))}
            </StyledSwiper>
            </Grid>
            </Grid>

            <Grid container sx={{paddingTop: "10px", width : "100"}}>
            <Grid size={{ xs: 12 }} sx={{width: "100%"}}>
                <Typography sx={{
                    fontSize: "40px",
                    color: theme.palette.orange.main,
                    fontWeight: "700",
                    paddingBottom: theme.spacing(4)
                }}>
                Вы записаны
                </Typography>
            </Grid>
            <Grid sx={{width: "100%"}}>
                <StyledSwiper
                modules={[Navigation]}
                navigation
                slidesPerView={4}
                spaceBetween={20}
                style={{ width: "100%" }}
                >
                {eventCards.map((card) => (
                    <SwiperSlide key={card.id} style={{ display: "flex", justifyContent: "center" }}>
                    <EventCard
                        category="Категория"
                        name="Название"
                        location="Где-то"
                        data="12 июня, 13:00"
                        imageUrl={card.image}
                    />
                </SwiperSlide>
            ))}
            </StyledSwiper>
            </Grid>
            </Grid>

            <Grid container sx={{paddingTop: "10px", width : "100"}}>
            <Grid size={{ xs: 12 }} sx={{width: "100%"}}>
                <Typography sx={{
                    fontSize: "40px",
                    color: theme.palette.orange.main,
                    fontWeight: "700",
                    paddingBottom: theme.spacing(4)
                }}>
                Сегодня
                </Typography>
            </Grid>
            <Grid sx={{width: "100%"}}>
                <StyledSwiper
                modules={[Navigation]}
                navigation
                slidesPerView={4}
                spaceBetween={20}
                style={{ width: "100%" }}
                >
                {eventCards.map((card) => (
                    <SwiperSlide key={card.id} style={{ display: "flex", justifyContent: "center" }}>
                    <EventCard
                        category="Категория"
                        name="Название"
                        location="Где-то"
                        data="12 июня, 13:00"
                        imageUrl={card.image}
                    />
                </SwiperSlide>
            ))}
            </StyledSwiper>
            </Grid>
            </Grid>

            <Grid container sx={{paddingTop: "10px", width : "100"}}>
            <Grid size={{ xs: 12 }} sx={{width: "100%"}}>
                <Typography sx={{
                    fontSize: "40px",
                    color: theme.palette.orange.main,
                    fontWeight: "700",
                    paddingBottom: theme.spacing(4)
                }}>
                На этой неделе
                </Typography>
            </Grid>
            <Grid sx={{width: "100%"}}>
                <StyledSwiper
                modules={[Navigation]}
                navigation
                slidesPerView={4}
                spaceBetween={20}
                style={{ width: "100%" }}
                >
                {eventCards.map((card) => (
                    <SwiperSlide key={card.id} style={{ display: "flex", justifyContent: "center" }}>
                    <EventCard
                        category="Категория"
                        name="Название"
                        location="Где-то"
                        data="12 июня, 13:00"
                        imageUrl={card.image}
                    />
                </SwiperSlide>
            ))}
            </StyledSwiper>
            </Grid>
            </Grid>

      </Box>
        );
      };
      
      export default MainPage; 