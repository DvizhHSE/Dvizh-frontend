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
import { useState, useRef, useEffect } from "react";
import { styled } from '@mui/system';
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";
import dayjs from "dayjs";
import api from "../api/axios";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import EventCard2 from "../components/EventCard2";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useAuth } from '../context/AuthContext';
import ahievement from '../assets/images/achievement_1.png';

type Event = {
    _id: string;
    category_id: string;
    name: string;
    location: string;
    date: string;
    photo: string;
  };

  const PersonalAccount = () => {
    const theme = useTheme();
    const [userData, setUserData] = useState(null);
    const [gender, setGender] = useState("");
    const [birthDate, setBirthDate] = useState<Dayjs | null>(null);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    // const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const file = e.target.files?.[0]; // берём только один файл
    //     if (!file ) return;
      
    //     const formData = new FormData();
    //     formData.append("profile_picture", file); // добавляем только один файл
      
    //     try {
    //       const res = await api.patch(`/api/user/684f3500f6324a1adb262185/profile-picture`, formData );
      
    //       if (res.data?.profile_picture) {
    //         setImage(res.data.profile_picture);
    //       }
      
    //       alert("Фото успешно загружено");
    //     } catch (err) {
    //       console.error("Ошибка загрузки фото:", err);
    //       alert("Ошибка при загрузке фото");
    //     }
    //   };     
    
    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        setSelectedFile(file);
        setImageUrl(URL.createObjectURL(file)); // для предпросмотра
      }
    };
    

    const [events, setEvents] = useState<Event[]>([]);
    const { userId } = useAuth();
    
      useEffect(() => {
        //if (!userId) return;
        api
          .get(`/api/users/684f3500f6324a1adb262185/events`) //684d865176ca9263a4bad628
          .then((res) => {
            console.log("Получено с сервера:", res.data);
            setEvents(res.data);
          })
          .catch((err) => console.error("Ошибка загрузки данных:", err));
      }, [userId]);
      
    useEffect(() => {
        //if (!userId) return;
        api
          .get(`/api/users/684f3500f6324a1adb262185`) //684d865176ca9263a4bad628
          .then(res => {
            const data = res.data;
            setName(data.name);
            setSurname(data.surname);
            setEmail(data.email);
            setImageUrl(data.profile_picture);
            setGender(data.sex);
            setBirthDate(data.birthday ? dayjs(data.birthday) : null);
            setPhone(data.phone_number);
          })
          .catch(err => console.error("Ошибка загрузки профиля:", err));
      }, [userId]);
      

  // const handleSave = () => {
  //   api
  //     .patch(`/api/users/684f3500f6324a1adb262185`, {
  //     name,
  //     surname,
  //     email,
  //     sex: gender,
  //     birthday: birthDate ? birthDate.format("YYYY-MM-DDT00:00:00") : null,
  //     phone_number: phone
  //   })
  //   .then(() => alert("Изменения сохранены"))
  //   .catch(err => console.error("Ошибка при сохранении:", err));
  // };
  const handleSave = async () => {
    let uploadedImageUrl = imageUrl;
  
    if (selectedFile) {
      const formData = new FormData();
      formData.append("profile_picture", selectedFile);
  
      try {
        const res = await api.patch(`/api/users/${userId}/profile-picture`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
  
        uploadedImageUrl = res.data?.profile_picture; // ссылка от сервера
        if (!uploadedImageUrl) throw new Error("Сервер не вернул ссылку на фото");
  
      } catch (error) {
        console.error("Ошибка загрузки фото:", error);
        alert("Не удалось загрузить фото");
        return;
      }
    }
  
    try {
      await api.patch(`/api/users/${userId}`, {
        name,
        surname,
        email,
        sex: gender,
        birthday: birthDate ? birthDate.format("YYYY-MM-DDT00:00:00") : null,
        phone_number: phone,
        profile_picture: uploadedImageUrl
      });
  
      alert("Изменения сохранены");
    } catch (err) {
      console.error("Ошибка при сохранении:", err);
      alert("Ошибка при сохранении данных");
    }
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
                            src={imageUrl || ""}
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
                            outline: "none",
                            "&:focus": {
                            outline: "none",
                            },
                            "&.Mui-focusVisible": {
                            outline: "none",
                            },
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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        sx={{ paddingBottom: theme.spacing(6),
                            marginTop: theme.spacing(6),
                            "& .MuiOutlinedInput-root": { borderRadius: 1 } }}
                    />

                    <TextField
                        label="Фамилия"
                        variant="outlined"
                        fullWidth
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
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
                        <MenuItem value={"Мужской"}>Мужской</MenuItem>
                        <MenuItem value={"Женский"}>Женский</MenuItem>
                        <MenuItem value={"Не указано"}>Не указано</MenuItem>
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
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        sx={{ paddingBottom: theme.spacing(6),
                            "& .MuiOutlinedInput-root": { borderRadius: 1 } }}
                    />

                    <TextField
                        label="Номер телефона"
                        variant="outlined"
                        fullWidth
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)}
                        sx={{ paddingBottom: theme.spacing(6),
                            "& .MuiOutlinedInput-root": { borderRadius: 1 } }}
                    />
                    <StyledButton onClick={handleSave} sx={{boxShadow : 3,
                        outline: "none",
                        "&:focus": {
                        outline: "none",
                        },
                        "&.Mui-focusVisible": {
                        outline: "none",
                        },
                    }} >
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
                    {events.map((card: Event) => (
                            <Grid size={{xs: 4}} key={card._id}>
                            <EventCard2
                                _id = {card._id}
                                name={card.name}
                                location={card.location}
                                data={card.date}
                                imageUrl={card.photo}
                                category={card.category_id}
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