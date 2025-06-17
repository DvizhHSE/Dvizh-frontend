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
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";
import { styled, useTheme } from "@mui/system";
import { Link } from "react-router-dom";

const ActionButton = styled(Button)(({ theme }) => ({
  fontSize: "16px",
  padding: theme.spacing(2, 5),
  backgroundColor: theme.palette.orange.main,
  color: theme.palette.text.white,
  marginRight: theme.spacing(2),
  "&:hover": {
    backgroundColor: theme.palette.orange.dark,
  },
}));

const HeaderCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.text.primary,
}));

const AdminParticipantsPage = () => {
  const theme = useTheme();
  const [sortBy, setSortBy] = useState("");
  const [filter, setFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRows, setSelectedRows] = useState<Record<number, boolean>>({});

  const [rows, setRows] = useState([
    {
      name: "Алексей Иванов",
      email: "ivanov@mail.ru",
      lastVisit: "02.05.2025 10:20",
      type: "Студент",
      events: 5,
    },
    {
      name: "Мария Смирнова",
      email: "smirnova@mail.ru",
      lastVisit: "01.05.2025 09:50",
      type: "Студент",
      events: 5,
    },
    {
      name: "Дмитрий Петров",
      email: "petrov@mail.ru",
      lastVisit: "02.05.2025 10:20",
      type: "Студент",
      events: 5,
    },
    {
      name: "Елена Кузнецова",
      email: "kuznecova@mail.ru",
      lastVisit: "02.05.2025 10:20",
      type: "Студент",
      events: 5,
    },
    {
      name: "Игорь Соколов",
      email: "sokolov@mail.ru",
      lastVisit: "02.05.2025 10:20",
      type: "Студент",
      events: 5,
    },
  ]);

  const handleCheckboxChange = (index: number) => {
    setSelectedRows((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const sortRows = (rows: typeof rows) => {
    const sorted = [...rows];
    if (sortBy === "name") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "date") {
      sorted.sort((a, b) => new Date(b.lastVisit).getTime() - new Date(a.lastVisit).getTime());
    } else if (sortBy === "events") {
      sorted.sort((a, b) => b.events - a.events);
    }
    return sorted;
  };

  const filteredRows = rows.filter((r) => {
    const matchesFilter = filter ? r.type.toLowerCase() === filter.toLowerCase() : true;
    const matchesSearch = searchQuery
      ? r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.email.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchesFilter && matchesSearch;
  });

  const displayedRows = sortRows(filteredRows);

  return (
    <Box sx={{ padding: theme.spacing(10, 20), background: theme.palette.background.paper }}>
      <Typography sx={{ fontSize: "40px", fontWeight: 800, marginBottom: theme.spacing(4) }}>
        Участники платформы
      </Typography>

      <Grid container spacing={2} sx={{ marginBottom: theme.spacing(3) }}>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            placeholder="Поиск"
            variant="outlined"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={8} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <ActionButton>Деактивировать</ActionButton>
          <ActionButton>Дать достижение</ActionButton>
          <FormControl sx={{ minWidth: 150, mr: 2 }}>
            <InputLabel>Сортировать по</InputLabel>
            <Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <MenuItem value="name">Имя</MenuItem>
              <MenuItem value="date">Дата</MenuItem>
              <MenuItem value="events">Мероприятия</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 150 }}>
            <InputLabel>Фильтры</InputLabel>
            <Select value={filter} onChange={(e) => setFilter(e.target.value)}>
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
              <HeaderCell>
                <Checkbox disabled />
              </HeaderCell>
              <HeaderCell>Имя Фамилия, почта</HeaderCell>
              <HeaderCell>Последнее посещение</HeaderCell>
              <HeaderCell>Тип пользователя</HeaderCell>
              <HeaderCell>Кол-во посещенных мероприятий</HeaderCell>
              <HeaderCell></HeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedRows.map((row, index) => (
              <TableRow
                key={index}
                sx={{ backgroundColor: selectedRows[index] ? theme.palette.action.hover : "inherit" }}
              >
                <TableCell>
                  <Checkbox
                    checked={!!selectedRows[index]}
                    onChange={() => handleCheckboxChange(index)}
                  />
                </TableCell>
                <TableCell>
                  {row.name}
                  <br />
                  <Typography variant="body2" color="textSecondary">
                    {row.email}
                  </Typography>
                </TableCell>
                <TableCell>{row.lastVisit}</TableCell>
                <TableCell>{row.type}</TableCell>
                <TableCell>{row.events}</TableCell>
                <TableCell>
                  <Button variant="contained" color="warning" size="small">
                    Перейти в профиль
                  </Button>
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
