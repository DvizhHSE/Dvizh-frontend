import React from "react";
import {Grid, Card, CardMedia, CardContent, Typography, Divider, Box, Shadows } from "@mui/material";
import { styled } from '@mui/system';
import { Theme } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
interface TeamMemberProps {
    category: string;
    name: string;
    location: string;
    data: string;
    imageUrl: string;
  }
  
  const Cards = styled(Card)<{ theme: Theme }>(({ theme }) => ({
    width: "60vw",
    maxWidth: "987px",
    backgroundColor: theme.palette.background.card,
    borderRadius: theme.shape.cardRadius,
    margin: "auto",
    boxShadow: theme.shadows[3], 
  }));

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

const EventCard: React.FC<TeamMemberProps> = ({ 
    category,
    name,
    location,
    data,
    imageUrl,
 }) => {
    const theme = useTheme();
    return (
        <Card>
            <CardMedia
                component="img"
                image={imageUrl}
                alt={name}
                sx = {{ boxShadow: 3, aspectRatio: "60 / 40", 
                borderRadius: theme.shape.cardRadius}}
            />

            <CardContent>
                <CategoryText>
                {category}
                </CategoryText>
                <EventTitle>
                {name}
                </EventTitle>
                <LocationIcon />
                <LocationText
                >
                {location}
                </LocationText>
                <CalendarIcon />
                <DateText>
                {data}
                </DateText>
            </CardContent>
        </Card>
    );
  };
  export default EventCard;