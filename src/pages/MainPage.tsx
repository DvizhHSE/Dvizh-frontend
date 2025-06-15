import { Grid, Typography, Box } from '@mui/material';
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { styled } from '@mui/system';
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import api from "../api/axios";
import { useAuth } from '../context/AuthContext';
import EventCard from "../components/EventCard";

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

  type Event = {
    _id: string;
    category_id: string;
    name: string;
    location: string;
    date: string;
    photo: string[];
  };



const MainPage = () => {
  const theme = useTheme();

  const [favorite, setFavorite] = useState<Event[]>([]);
  const [planned, setPlanned] = useState<Event[]>([]);
  const [today, setToday] = useState<Event[]>([]);
  const [thisWeek, setThisWeek] = useState<Event[]>([]);
  const { userId } = useAuth();

  useEffect(() => {
    //if (!userId) return;

    api
      .get(`/api/users/home/${userId}`) //684d865176ca9263a4bad628
      .then((res) => {
        console.log("Получено с сервера:", res.data);
        setFavorite(res.data.favorite_events);
        setPlanned(res.data.planned_events);
        setToday(res.data.today_events);
        setThisWeek(res.data.this_week_events);
      })
      .catch((err) => console.error("Ошибка загрузки данных:", err));
  }, [userId]);

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
                {favorite.map((card: Event) => (
                    <SwiperSlide key={card._id} style={{ display: "flex", justifyContent: "center" }}>
                    <EventCard
                      _id = {card._id}
                      name={card.name}
                      location={card.location}
                      date={card.date}
                      imageUrl={card.photo?.[0] || ""}
                      category={card.category_id}
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
                {planned.map((card: Event) => (
                    <SwiperSlide key={card._id} style={{ display: "flex", justifyContent: "center" }}>
                    <EventCard
                      _id = {card._id}
                      name={card.name}
                      location={card.location}
                      date={card.date}
                      imageUrl={card.photo[0]}
                      category={card.category_id}
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
                {today.map((card: Event) => (
                    <SwiperSlide key={card._id} style={{ display: "flex", justifyContent: "center" }}>
                    <EventCard
                      _id = {card._id}
                      name={card.name}
                      location={card.location}
                      date={card.date}
                      imageUrl={card.photo?.[0] || ""}
                      category={card.category_id}
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
                {thisWeek.map((card: Event) => (
                    <SwiperSlide key={card._id} style={{ display: "flex", justifyContent: "center" }}>
                    <EventCard
                      _id = {card._id}
                      name={card.name}
                      location={card.location}
                      date={card.date}
                      imageUrl={card.photo?.[0] || ""}
                      category={card.category_id}
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