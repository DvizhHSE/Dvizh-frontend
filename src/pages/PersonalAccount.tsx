import { Grid,
    Button,
    Typography,
    Box,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    TextField,
    MenuItem,
    Select,
    InputLabel,
    FormControl,
    Avatar,
    IconButton} from '@mui/material';
import { useTheme } from "@mui/material/styles";
import { useState, useRef } from "react";
import { styled } from '@mui/system';
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import EventCard2 from "../components/EventCard2";
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
import ahievement from '../assets/images/achievement_1.png';

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
    const [gender, setGender] = useState("");
    const [birthDate, setBirthDate] = useState<Dayjs | null>(null);
    const [image, setImage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            setImage(reader.result as string);
          };
          reader.readAsDataURL(file);
        }
      };
    const handleGenderChange = (event: React.MouseEvent<HTMLElement>, newGender: string) => {
    if (newGender !== null) setGender(newGender);
    };

    const StyledButton = styled(Button)(({ theme }) =>({
        background: theme.palette.orange.main,
        width: "100%",
        color: theme.palette.text.white
    }))

    const ImageContainer = styled(Box)(({ theme }) => ({
        display: "flex",
        position: "relative",
        width: "100%",
        height: "100%",
        textAlign: "right",
        alignItems: "center",
        "& img": {
          maxWidth: "100%",
          width: "100%", 
          height: "auto",
        },
      }));

    return (
        <Box sx={{ 
          width: '99vw', 
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
                <Grid sx={{
                    display: "flex",
                    flexDirection: "column", 
                    alignItems: "center",  
                }}>
                    <Box sx={{ 
                        position: "relative",
                        width: 160, 
                        height: 160,}}>
                        <Avatar
                            src={image || ""}
                            sx={{
                            width: 160,
                            height: 160,
                            bgcolor: theme.palette.grey[300],                          
                            }}
                        />
                        <input
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            style={{ display: "none" }}
                            onChange={handleImageUpload}
                        />
                        <IconButton
                            sx={{
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            bgcolor: "white",
                            border: "1px solid #ccc",
                            width: 50,
                            height: 50,
                            "&:hover": {
                                bgcolor: theme.palette.background.light,
                            },
                            }}
                            onClick={() => fileInputRef.current?.click()}
                        >
                            <PhotoCamera fontSize="small" />
                        </IconButton>
                    </Box>
                    <Typography sx={{
                        fontWeight: "500", 
                        fontSize: "14px",
                        paddingTop: theme.spacing(4)}}>
                        Фото профиля
                    </Typography>
                    <Box sx={{
                        width : "50%",                       
                        }}>
                    <TextField
                        label="Имя"
                        variant="outlined"
                        fullWidth
                        sx={{ paddingBottom: theme.spacing(6),
                            marginTop: theme.spacing(6),
                            "& .MuiOutlinedInput-root": { borderRadius: 1 } }}
                    />

                    <TextField
                        label="Фамилия"
                        variant="outlined"
                        fullWidth
                        sx={{ paddingBottom: theme.spacing(6),
                            "& .MuiOutlinedInput-root": { borderRadius: 1 } }}
                    />

                    <FormControl fullWidth sx={{ paddingBottom: theme.spacing(6),
                            "& .MuiOutlinedInput-root": { borderRadius: 1 } }}>
                        <InputLabel id="gender-label">Пол</InputLabel>
                        <Select
                        labelId="gender-label"
                        id="gender"
                        value={gender}
                        label="Пол"
                        onChange={(e) => setGender(e.target.value)}
                        >
                        <MenuItem value={"male"}>Мужской</MenuItem>
                        <MenuItem value={"female"}>Женский</MenuItem>
                        </Select>
                    </FormControl>
                    
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Дата рождения"
                            value={birthDate}
                            onChange={(newValue) => setBirthDate(newValue)}
                            slotProps={{
                            textField: {
                                fullWidth: true,
                                variant: "outlined",
                                sx: {
                                paddingBottom: theme.spacing(6),
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: 2,
                                },
                                },
                            },
                            }}
                        />
                        </LocalizationProvider>
                        
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        sx={{ paddingBottom: theme.spacing(6),
                            "& .MuiOutlinedInput-root": { borderRadius: 1 } }}
                    />

                    <TextField
                        label="Номер телефона"
                        variant="outlined"
                        fullWidth
                        sx={{ paddingBottom: theme.spacing(6),
                            "& .MuiOutlinedInput-root": { borderRadius: 1 } }}
                    />
                    <StyledButton sx={{boxShadow: 2}}>
                        Сохранить изменения
                    </StyledButton>

                    </Box>
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
                <Grid container spacing ={7} sx={{width: "100%"}}>
                        {eventCards.map((card) => (
                            <Grid size={{xs: 4}}>
                            <EventCard2
                                category="Категория"
                                name="Название"
                                location="Где-то"
                                data="12 июня, 13:00"
                                imageUrl={card.image}
                            />
                            </Grid>
                        ))}
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
                <Typography sx={{ fontWeight: "bold", fontSize: "40px" }}>Ваши достижения</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Grid container spacing ={7} sx={{width: "100%"}}>
                    <Grid size={{xs: 3}}>
                        <ImageContainer>
                            <img src={ahievement} alt="" /> 
                        </ImageContainer>
                    </Grid>
                </Grid>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
};

export default PersonalAccount; 