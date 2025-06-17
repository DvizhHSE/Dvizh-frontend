import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { styled, useTheme } from "@mui/system";
import { Search } from "@mui/icons-material";

const ActionButton = styled(Button)(({ theme }) => ({
  fontSize: "14px",
  padding: theme.spacing(1, 3),
  backgroundColor: "#F38D68",
  color: "#fff",
  textTransform: "none",
  borderRadius: 10,
  "&:hover": {
    backgroundColor: "#e57a58",
  },
}));

const HeaderCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 600,
  color: "#3D3D3D",
  backgroundColor: "#F2F2F2",
}));

const AdminParticipantsPage = () => {
  const theme = useTheme();
  const [sortBy, setSortBy] = useState("");
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");

  const rows = [
    {
      name: "Алексей Иванов",
      email: "a.ivanov@mail.ru",
      type: "Студент",
      events: 3,
      achievements: 5,
    },
    {
      name: "Мария Смирнова",
      email: "m.smirnova@mail.ru",
      type: "Преподаватель",
      events: 8,
      achievements: 12,
    },
    {
      name: "Дмитрий Петров",
      email: "d.petrov@mail.ru",
      type: "Студент",
      events: 2,
      achievements: 1,
    },
    {
      name: "Елена Кузнецова",
      email: "e.kuz@mail.ru",
      type: "Преподаватель",
      events: 10,
      achievements: 15,
    },
    {
      name: "Игорь Соколов",
      email: "i.sokolov@mail.ru",
      type: "Студент",
      events: 5,
      achievements: 6,
    },
  ];

  const filteredRows = rows
    .filter((r) =>
      search.trim()
        ? r.name.toLowerCase().includes(search.toLowerCase()) ||
          r.email.toLowerCase().includes(search.toLowerCase())
        : true
    )
    .filter((r) => (filter ? r.type === filter : true))
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "events") return b.events - a.events;
      if (sortBy === "achievements") return b.achievements - a.achievements;
      return 0;
    });

  return (
    <Box sx={{ px: 15, py: 10 }}>
      <Typography variant="h4" fontWeight={800} mb={4}>
        Участники платформы
      </Typography>

      <Grid container spacing={2} mb={3}>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            placeholder="Поиск"
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} md={8} display="flex" justifyContent="flex-end" gap={2}>
          <FormControl sx={{ minWidth: 160 }}>
            <InputLabel>Сортировать по</InputLabel>
            <Select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              label="Сортировать по"
            >
              <MenuItem value="name">Имя</MenuItem>
              <MenuItem value="events">Кол-во мероприятий</MenuItem>
              <MenuItem value="achievements">Кол-во достижений</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 160 }}>
            <InputLabel>Фильтры</InputLabel>
            <Select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              label="Фильтры"
            >
              <MenuItem value="Студент">Студент</MenuItem>
              <MenuItem value="Преподаватель">Преподаватель</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <HeaderCell>Имя Фамилия, почта</HeaderCell>
              <HeaderCell>Тип пользователя</HeaderCell>
              <HeaderCell>Кол-во посещенных мероприятий</HeaderCell>
              <HeaderCell>Количество достижений</HeaderCell>
              <HeaderCell></HeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  {row.name}
                  <br />
                  <Typography variant="body2" color="text.secondary">
                    {row.email}
                  </Typography>
                </TableCell>
                <TableCell>{row.type}</TableCell>
                <TableCell>{row.events}</TableCell>
                <TableCell>{row.achievements}</TableCell>
                <TableCell>
                  <ActionButton>Перейти в профиль</ActionButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AdminParticipantsPage;
