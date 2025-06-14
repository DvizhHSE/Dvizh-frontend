import {Grid, Card, CardMedia, CardContent, Typography, Box, Shadows } from "@mui/material";
import { styled } from '@mui/system';
import { Theme } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
interface CardProps {
   _id: string;
    category: string;
    name: string;
    location: string;
    date: string;
    imageUrl: string;
  }

  const CategoryText = styled(Typography)(({ theme }) =>({
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: '14px',
    letterSpacing: '0.2px',
    color: theme.palette.text.four,
    paddingTop: theme.spacing(2) 
  }));
  
  const EventTitle = styled(Typography)(({ theme }) =>({
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: '20px',
    color: theme.palette.text.primary,
    padding: '0'
  }));
  
  const LocationIcon = styled(LocationOnIcon)(({ theme }) =>({
    width: '20px',
    height: '20.3px',
    color: theme.palette.orange.three,
    '& path': {
      fill: 'none',
      stroke: theme.palette.orange.three,
      strokeWidth: 1.5
    }
  }));
  
  const LocationText = styled(Typography)(({ theme }) =>({
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: '14px',
    letterSpacing: '0.2px',
    color: theme.palette.text.three,
  }));
  
  const CalendarIcon = styled(CalendarTodayIcon)(({ theme }) =>({
    width: '20px',
    height: '20px',
    color: theme.palette.orange.three,
    '& path': {
      fill: 'none',
      stroke: theme.palette.orange.three,
      strokeWidth: 1.5
    }
  }));
  
  const DateText = styled(Typography)(({ theme }) =>({
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: '14px',
    letterSpacing: '0.2px',
    color: theme.palette.text.three,
  }));

const EventCard: React.FC<CardProps> = ({ 
    category,
    name,
    location,
    data,
    imageUrl,
 }) => {
    const theme = useTheme();
    return (
        <Card sx={{
            background: theme.palette.background.default,
            boxShadow: "none",        
            borderRadius: 0,}}>
            <Grid size={{xs: 12}}>
            <CardMedia
                component="img"
                image={imageUrl}
                alt={name}
                sx = {{ boxShadow: 3, aspectRatio: "40 / 50", 
                borderRadius: theme.shape.cardRadius}}
            />
            </Grid>

            <Grid size={{xs: 12}}>
            <CardContent 
                sx={{
                    paddingTop: theme.spacing(1),
                    paddingBottom: theme.spacing(1),
                    paddingLeft: 0,
                    paddingRight: 0,
                }}
                >
                <CategoryText>{category}</CategoryText>
                <EventTitle>{name}</EventTitle>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, paddingBottom: theme.spacing(1)}}>
                    <LocationIcon />
                    <LocationText>{location}</LocationText>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <CalendarIcon />
                    <DateText>{data}</DateText>
                </Box>
            </CardContent>
            </Grid>
        </Card>
    );
  };
  export default EventCard;