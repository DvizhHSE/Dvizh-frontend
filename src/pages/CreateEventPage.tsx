import ruLocale from "date-fns/locale/ru";
import React, { useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const createEventTitleStyles = {
  left: "100px",
  height: "57px",
  fontFamily: "'Montserrat', sans-serif",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "40px",
  lineHeight: "57px",
  letterSpacing: "0.2px",
  color: "#2A303E",
  paddingLeft: "100px",
};

const nameInputStyles = {
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "flex-start" as const,
  paddingLeft: "100px",
  gap: "6px",
  width: "588px",
  height: "82px",
  marginTop: "40px",
};

const CreateEventPage: React.FC = () => {
  const [date, setDate] = useState<Date | null>(new Date());
  const [time, setTime] = useState<Date | null>(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ruLocale}>
      {/* Родительский контейнер с relative, чтобы абсолютное позиционирование сработало */}
      <Box sx={{ p: 4, position: "relative", minHeight: 700 }}>
        <Typography component="h2" sx={createEventTitleStyles}>
          Создать мероприятие
        </Typography>

        {/* Название */}
        <Box sx={nameInputStyles}>
          <Typography variant="body1" component="label" htmlFor="event-name">
            Введите название
          </Typography>
          <TextField
            id="event-name"
            fullWidth
            placeholder="Название"
            sx={{ '& .MuiOutlinedInput-root': { backgroundColor: '#F4F7FC' } }}
          />
        </Box>

        {/* Категория */}
        <Box sx={nameInputStyles}>
        <Typography variant="body1" component="label" htmlFor="category-select">
            Выберите категорию
        </Typography>
        <FormControl fullWidth>
            <Select
            id="category-select"
            value={""}
            onChange={() => {}}
            displayEmpty
            sx={{
                backgroundColor: '#F4F7FC',
                borderRadius: 1,
                '& .MuiSelect-select': { padding: '12px 14px' },
            }}
            renderValue={(selected) => {
                if (selected === "") {
                return <em style={{ color: "#999" }}>Категория</em>;
                }
                return selected;
            }}
            >
            <MenuItem disabled value="">
                <em>Выберите категорию</em>
            </MenuItem>
            <MenuItem value="Культура">Культура</MenuItem>
            <MenuItem value="Образование">Образование</MenuItem>
            </Select>
        </FormControl>
        </Box>


        {/* Место проведения */}
        <Box sx={nameInputStyles}>
          <Typography variant="body1" component="label" htmlFor="place-input">
            Введите место проведения мероприятия
          </Typography>
          <TextField
            id="place-input"
            fullWidth
            placeholder="Место"
            sx={{ backgroundColor: '#F4F7FC' }}
          />
        </Box>

        {/* Далее остальная форма */}
        <Grid container spacing={3} sx={{ mt: 12 }}>
          {/* Дата */}
          <Grid item xs={6} md={3}>
            <DatePicker
              label="Дата"
              value={date}
              onChange={setDate}
              format="dd.MM.yyyy"
            />
          </Grid>

          {/* Время */}
          <Grid item xs={6} md={3}>
            <TimePicker
              label="Время"
              value={time}
              onChange={setTime}
            />
          </Grid>

          {/* Для кого мероприятие */}
          <Grid item xs={12} md={6}>
            <FormControl>
              <FormLabel>Для кого мероприятие</FormLabel>
              <RadioGroup row defaultValue="student">
                <FormControlLabel value="school" control={<Radio />} label="Школьник" />
                <FormControlLabel value="student" control={<Radio />} label="Студент" />
                <FormControlLabel value="parent" control={<Radio />} label="Родитель" />
              </RadioGroup>
            </FormControl>
          </Grid>

          {/* Возрастное ограничение */}
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Возрастное ограничение</InputLabel>
              <Select defaultValue="0">
                <MenuItem value="0">0+</MenuItem>
                <MenuItem value="6">6+</MenuItem>
                <MenuItem value="12">12+</MenuItem>
                <MenuItem value="18">18+</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Описание */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Описание"
              multiline
              rows={4}
              inputProps={{ maxLength: 1200 }}
              helperText="Макс. 1200 символов"
            />
          </Grid>

          {/* Загрузка фото */}
          <Grid item xs={12} md={6}>
            <Typography>Загрузите фото мероприятия</Typography>
            <Box
              sx={{
                border: "2px dashed #ccc",
                borderRadius: 2,
                width: "100%",
                height: 200,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#999",
              }}
            >
              <Typography>+</Typography>
            </Box>
          </Grid>

          {/* Кнопка Создать */}
          <Grid item xs={12}>
            <Button variant="contained" color="warning" size="large">
              Создать
            </Button>
          </Grid>
        </Grid>
      </Box>
    </LocalizationProvider>
  );
};

export default CreateEventPage;
