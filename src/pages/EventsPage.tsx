
import * as React from "react";
import { useNavigate } from 'react-router-dom';
import { Box, Typography, InputBase, Button, IconButton } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import { styled } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFns';
import { ru } from 'date-fns/locale';
import { DateRange } from '@mui/x-date-pickers-pro';
import EventCardComponent from '../components/EventCard2';
import { Event } from '../types/event';
import api from "../api/axios";
import { useEffect, useState } from "react";
import { useAuth } from '../context/AuthContext';

const EventsContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: theme.palette.background.paper,
  padding: '0 120px',
  position: 'relative',
  width: '99vw',
  boxSizing: 'border-box',
  paddingBottom: '40px'
}));

const TitleTypography = styled(Typography)(({ theme }) => ({
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: 800,
  fontSize: '52px',
  lineHeight: '80px',
  letterSpacing: '0.2px',
  color: '#2A303E'
}));

const SearchRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '20px',
  marginTop: '28px',
  gap: '400px'
}));

const SearchContainer = styled(Box)(({ theme }) => ({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '10px 20px',
  gap: '12px',
  width: '588px',
  height: '40px',
  background: '#F4F7FC',
  border: '1px solid #E4E4E8',
  borderRadius: '6px'
}));

const SearchInput = styled(InputBase)(({ theme }) => ({
  width: '100%',
  '& .MuiInputBase-input': {
    padding: 0,
    fontSize: '14px',
    color: theme.palette.text.primary,
    '&::placeholder': {
      color: '#7F838B',
      opacity: 1
    }
  }
}));

const PrimaryButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px 24px',
  gap: '10px',
  width: '282px',
  height: '40px',
  background: '#EA6948',
  borderRadius: '10px',
  color: '#FFFFFF',
  textTransform: 'none',
  fontSize: '14px',
  '&:hover': {
    background: '#EA6948',
    opacity: 0.9
  }
}));

const FilterButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '4px 24px',
  gap: '10px',
  height: '38px',
  background: '#EF8E76',
  borderRadius: '10px',
  color: '#FFFFFF',
  textTransform: 'none',
  fontSize: '14px',
  '&:hover': {
    background: '#EF8E76',
    opacity: 0.9
  }
}));

const AgeButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  padding: '4px 24px',
  gap: '10px',
  height: '38px',
  background: '#EF8E76',
  borderRadius: '10px',
  color: '#FFFFFF',
  textTransform: 'none',
  fontSize: '14px',
  '&:hover': {
    background: '#EF8E76',
    opacity: 0.9
  }
}));

const ButtonsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '24px'
}));


const EventsPage = () => {
  const theme = useTheme();
  const [dateRange, setDateRange] = React.useState<DateRange<Date>>([null, null]);
  const [favorites, setFavorites] = React.useState<Record<string, boolean>>({});
  const [events, setEvents] = useState<Event[]>([]);
  const { userId } = useAuth();

  useEffect(() => {
    api
      .get(`/api/events/`) 
      .then((res) => {
        console.log("Получено с сервера:", res.data);
        setEvents(res.data);
      })
      .catch((err) => console.error("Ошибка загрузки данных:", err));

    // Загружаем избранные мероприятия пользователя
    if (userId) {
      api
        .get(`/api/users/${userId}/favorites`)
        .then((res) => {
          const favoriteEvents = res.data;
          const favoritesMap = favoriteEvents.reduce((acc: Record<string, boolean>, event: any) => {
            acc[event._id] = true;
            return acc;
          }, {});
          setFavorites(favoritesMap);
        })
        .catch((err) => console.error("Ошибка загрузки избранного:", err));
    }
  }, [userId]);

  const handleHeartClick = async (eventId: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Предотвращаем переход на страницу события
    if (!userId) return;

    try {
      await api.post(`/api/users/${userId}/favorites/${eventId}`);
      setFavorites((prev: Record<string, boolean>) => ({
        ...prev,
        [eventId]: !prev[eventId]
      }));
    } catch (error) {
      console.error("Ошибка при добавлении в избранное:", error);
    }
  };


  const handleEventClick = (eventId: string) => {
    navigate(`/event/${eventId}`, { state: { eventData: eventId } });

  };

  return (
    <Box sx={{ 
      width: '100%', 
      minHeight: '100vh',
      margin: 0,
      padding: 0,
      overflow: 'auto',
      background: theme.palette.background.paper
    }}>
      <EventsContainer>
        <TitleTypography>
          Мероприятия
        </TitleTypography>

        <SearchRow>
          <SearchContainer>
            <SearchIcon sx={{ color: '#7F838B' }} />
            <SearchInput
              placeholder="Поиск"
              inputProps={{ 'aria-label': 'search events' }}
            />
          </SearchContainer>

          <PrimaryButton>
            <AddIcon sx={{ fontSize: '24px', marginRight: '8px' }} />
            Создать мероприятие
          </PrimaryButton>
        </SearchRow>

        <ButtonsContainer>
          <FilterButton>
            Категории
            <KeyboardArrowDownIcon sx={{ fontSize: '20px' }} />
          </FilterButton>
          <FilterButton>
            Для кого
            <KeyboardArrowDownIcon sx={{ fontSize: '20px' }} />
          </FilterButton>
          <AgeButton>
            0+
            <KeyboardArrowDownIcon sx={{ fontSize: '20px' }} />
          </AgeButton>
          <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ru}>
            <DateRangePicker
              value={dateRange}
              onChange={(newValue) => setDateRange(newValue)}
              localeText={{
                start: 'Начало',
                end: 'Конец',
                cancelButtonLabel: 'Отмена',
                okButtonLabel: 'ОК',
                clearButtonLabel: 'Очистить',
                todayButtonLabel: 'Сегодня'
              }}
              slotProps={{
                textField: {
                  placeholder: '',
                  size: "small",
                  sx: {
                    width: '280px',
                    '& .MuiOutlinedInput-root': {
                      background: '#F4F7FC',
                      border: '1px solid #7F838B',
                      borderRadius: '10px',
                      '& .MuiOutlinedInput-input': {
                        padding: '8px 14px',
                        height: '18px'
                      },
                      '&:hover': {
                        borderColor: '#EA6948'
                      }
                    }
                  }
                },
                popper: {
                  sx: {
                    '& .MuiPaper-root': {
                      transform: 'scale(0.7)',
                      transformOrigin: 'top left',
                      '& .MuiPickersCalendarHeader-root': {
                        transform: 'scale(1.4)',
                        transformOrigin: 'top left'
                      },
                      '& .MuiPickersDay-root': {
                        width: '28px',
                        height: '28px',
                        margin: '0 2px'
                      }
                    }
                  }
                }
              }}
            />
          </LocalizationProvider>
        </ButtonsContainer>
        
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 384px)',
          gap: '24px',
          marginTop: '40px'
        }}>

          {events.map((card: Event) => (
            <Box 
              key={card._id} 
              onClick={() => handleEventClick(card._id)}
              sx={{ position: 'relative', cursor: 'pointer' }}
            >
              <EventCardComponent
                category={card.category_id}
                name={card.name}
                location={card.location}
                data={card.date}
                imageUrl={card.photos?.[0] || ""}
              />
              <IconButton 
                onClick={(e) => {
                  e.stopPropagation();
                  handleHeartClick(card._id, e);
                }} 
                sx={{
                  position: 'absolute',
                  top: 12,
                  right: 12,
                  color: favorites[card._id] ? '#EA6948' : '#7F838B',
                  outline: "none",
                  "&:focus": {
                    outline: "none",
                  },
                  "&.Mui-focusVisible": {
                    outline: "none",
                  },
                }}
              >
                {favorites[card._id] ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </IconButton>
            </Box>

          ))}
        </Box>
      </EventsContainer>
    </Box>
  );
};


export default EventsPage; 

