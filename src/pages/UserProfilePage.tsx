import React from "react";
import {
  Box,
  Typography,
  Grid,
  Avatar,
  Paper,
} from "@mui/material"; // Импорт всех нужных компонентов здесь, включая Grid
import { styled } from "@mui/system";
import {
  EmailOutlined,
  CalendarTodayOutlined,
  WcOutlined,
  EmojiEventsOutlined,
  EventOutlined,
  AccessTimeOutlined,
} from "@mui/icons-material";

import ach1 from "../assets/images/achievements/ach1.png";
import ach2 from "../assets/images/achievements/ach2.png";
import ach3 from "../assets/images/achievements/ach3.png";
import ach4 from "../assets/images/achievements/ach4.png";
import avatar from "../assets/images/avatar.png";

const Label = styled("div")(() => ({
  backgroundColor: "#F38D68",
  color: "white",
  padding: "4px 12px",
  borderRadius: "12px",
  fontWeight: 500,
  display: "inline-block",
  marginTop: 8,
  fontSize: 14,
}));

const InfoItem = ({ icon: Icon, text }: { icon: React.ElementType; text: string }) => (
  <Box display="flex" alignItems="center" gap={1} mb={1}>
    <Icon sx={{ color: "#F38D68" }} />
    <Typography>{text}</Typography>
  </Box>
);

const achievementList = [
  { title: "Достижение 1", image: ach1 },
  { title: "Достижение 2", image: ach2 },
  { title: "Достижение 3", image: ach3 },
  { title: "Достижение 4", image: ach4 },
];

const UserProfilePage = () => {
  return (
    <Box sx={{ px: 15, py: 10 }}>
      <Typography variant="body2" mb={2} color="gray">
        Участники / Иван Иванов
      </Typography>

      <Grid container spacing={4} alignItems="center">
        <Grid item>
          <Avatar
            alt="Иван Иванов"
            src={avatar}
            sx={{ width: 180, height: 180 }}
          />
        </Grid>
        <Grid item>
          <Typography variant="h4" fontWeight={800}>
            Иван Иванов
          </Typography>
          <Label>Студент</Label>
          <Box mt={2}>
            <InfoItem icon={WcOutlined} text="Мужской" />
            <InfoItem icon={CalendarTodayOutlined} text="12.12.2005" />
            <InfoItem icon={EmojiEventsOutlined} text="5 достижений" />
            <InfoItem icon={EventOutlined} text="7 посещенных мероприятий" />
            <InfoItem icon={AccessTimeOutlined} text="2 мая 2025, 12:52" />
            <InfoItem icon={EmailOutlined} text="helloword@mail.ru" />
          </Box>
        </Grid>
      </Grid>

      <Typography variant="h5" mt={8} mb={4} fontWeight={800}>
        Достижения
      </Typography>

      <Grid container spacing={3}>
        {achievementList.map((ach, index) => (
          <Grid item key={index}>
            <Paper
              elevation={3}
              sx={{
                width: 140,
                height: 140,
                borderRadius: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 1,
              }}
            >
              <img
                src={ach.image}
                alt={ach.title}
                style={{ width: "70%", height: "70%" }}
              />
            </Paper>
            <Typography align="center">{ach.title}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default UserProfilePage;
