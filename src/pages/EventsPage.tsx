import React from 'react';
import { Grid, Typography, Box, InputBase, Button, IconButton } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import { styled } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFns';
import { ru } from 'date-fns/locale';
import { DateRange } from '@mui/x-date-pickers-pro';
import eventImage from '../assets/images/event-image.png';
import eventImage2 from '../assets/images/event-image-2.png';
import eventImage3 from '../assets/images/event-image-3.png';
import eventImage4 from '../assets/images/event-image-4.png';
import eventImage5 from '../assets/images/event-image-5.png';
import eventImage6 from '../assets/images/event-image-6.png';
import eventImage7 from '../assets/images/event-image-7.png';
import eventImage8 from '../assets/images/event-image-8.png';
import eventImage9 from '../assets/images/event-image-9.png';

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

const EventImage = styled('img')({
  width: '384px',
  height: '300px',
  borderRadius: '21px',
  boxShadow: '4px 4px 20px rgba(0, 0, 0, 0.25)',
  objectFit: 'cover'
});

const EventCard = styled(Box)(({ theme }) => ({
  width: '384px',
  height: '410px',
  marginTop: '40px',
  background: 'transparent',
  borderRadius: '10px',
  position: 'relative'
}));

const HeartButton = styled(IconButton)({
  position: 'absolute',
  width: '50px',
  height: '50px',
  right: '20px',
  top: '20px',
  padding: 0,
  zIndex: 1,
  '&:hover': {
    background: 'transparent'
  },
  '&:focus': {
    outline: 'none'
  },
  '& .MuiTouchRipple-root': {
    display: 'none'
  }
});

const CategoryText = styled(Typography)({
  position: 'absolute',
  width: '384px',
  height: '20px',
  left: '0',
  top: '320px',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '20px',
  display: 'flex',
  alignItems: 'center',
  letterSpacing: '0.2px',
  textTransform: 'uppercase',
  color: '#AAACB2',
  padding: '0'
});

const EventTitle = styled(Typography)({
  position: 'absolute',
  width: 'auto',
  minWidth: '166px',
  maxWidth: '344px',
  height: '30px',
  left: '0',
  top: '350px',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '20px',
  lineHeight: '30px',
  display: 'flex',
  alignItems: 'center',
  letterSpacing: '0.2px',
  color: '#2A303E',
  padding: '0'
});

const LocationIcon = styled(LocationOnIcon)({
  width: '20px',
  height: '20.3px',
  flex: 'none',
  order: 0,
  flexGrow: 0,
  color: '#EF8E76',
  '& path': {
    fill: 'none',
    stroke: '#EF8E76',
    strokeWidth: 1.5
  }
});

const LocationText = styled(Typography)({
  width: '47px',
  height: '20px',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '20px',
  display: 'flex',
  alignItems: 'center',
  letterSpacing: '0.2px',
  color: '#7F838B',
  flex: 'none',
  order: 1,
  flexGrow: 0
});

const Frame = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '0px',
  gap: '5px',
  position: 'absolute',
  width: '72px',
  height: '20.3px',
  left: '0',
  top: '390px'
});

const CalendarIcon = styled(CalendarTodayIcon)({
  width: '20px',
  height: '20px',
  flex: 'none',
  order: 0,
  flexGrow: 0,
  color: '#EF8E76',
  '& path': {
    fill: 'none',
    stroke: '#EF8E76',
    strokeWidth: 1.5
  }
});

const DateText = styled(Typography)({
  width: '102px',
  height: '20px',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '20px',
  display: 'flex',
  alignItems: 'center',
  letterSpacing: '0.2px',
  color: '#7F838B',
  flex: 'none',
  order: 1,
  flexGrow: 0
});

const DateFrame = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '0px',
  gap: '5px',
  position: 'absolute',
  width: '127px',
  height: '20.3px',
  left: '0',
  top: '420px'
});

const EventsPage = () => {
  const theme = useTheme();
  const [dateRange, setDateRange] = React.useState<DateRange<Date>>([null, null]);
  const [favorites, setFavorites] = React.useState<Record<number, boolean>>({});

  const handleHeartClick = (eventId: number) => {
    setFavorites(prev => ({
      ...prev,
      [eventId]: !prev[eventId]
    }));
  };

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
          {eventCards.map((card) => (
            <EventCard key={card.id}>
              <EventImage 
                src={card.image}
                alt={`Event ${card.id}`}
              />
              <HeartButton onClick={() => handleHeartClick(card.id)}>
                {favorites[card.id] ? (
                  <FavoriteIcon sx={{ color: '#EA6948', fontSize: '50px' }} />
                ) : (
                  <FavoriteBorderIcon sx={{ color: '#EA6948', fontSize: '50px' }} />
                )}
              </HeartButton>
              <CategoryText>
                Категория 1
              </CategoryText>
              <EventTitle>
                Мероприятие {card.id}
              </EventTitle>
              <Frame>
                <LocationIcon />
                <LocationText>Место</LocationText>
              </Frame>
              <DateFrame>
                <CalendarIcon />
                <DateText>12 июня, 13:00</DateText>
              </DateFrame>
            </EventCard>
          ))}
        </Box>
      </EventsContainer>
    </Box>
  );
};

export default EventsPage; 