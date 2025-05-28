import ruLocale from "date-fns/locale/ru";
import React, { useState, ChangeEvent } from "react";
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
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const createEventTitleStyles = {
  height: "57px",
  fontFamily: "'Montserrat', sans-serif",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "40px",
  lineHeight: "57px",
  letterSpacing: "0.2px",
  color: "#2A303E",
  paddingLeft: "100px",
  position: "relative",
};

const nameInputStyles = {
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "flex-start" as const,
  gap: "6px",
  width: "601px",
  height: "82px",
  marginTop: "16px",
  paddingLeft: "100px",
};

const photoUploadWrapperStyles = {
  position: "absolute" as const,
  top: "90px",
  right: "150px",
  width: 384,
  height: 407,
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center" as const,
};

const CreateEventPage: React.FC = () => {
  const [date, setDate] = useState<Date | null>(new Date());
  const [time, setTime] = useState<Date | null>(new Date());
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ruLocale}>
      <Box
        sx={{
          width: "99vw",
          p: 4,
          minHeight: "100vh",
          position: "relative",
          backgroundColor: "white",
          boxSizing: "border-box",
          overflowY: "auto",
        }}
      >
        {/* Заголовок */}
        <Typography component="h2" sx={createEventTitleStyles}>
          Создать мероприятие
        </Typography>

        {/* Блок загрузки фото справа */}
        <Box sx={photoUploadWrapperStyles}>
          <Typography
            variant="body1"
            component="label"
            htmlFor="photo-upload"
            sx={{ marginBottom: 2 }}
          >
            Загрузите фото мероприятия
          </Typography>

          <label
            htmlFor="photo-upload"
            style={{ cursor: "pointer", width: "100%", height: "100%" }}
          >
            <Box
              sx={{
                backgroundColor: "#F4F7FC",
                border: "2px dashed #ccc",
                borderRadius: 2,
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#999",
                fontSize: 48,
                textAlign: "center",
                overflowWrap: "break-word",
                padding: 2,
                boxSizing: "border-box",
              }}
            >
              {selectedFile ? selectedFile.name : "+"}
            </Box>
          </label>
          <input
            type="file"
            id="photo-upload"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </Box>

        {/* Название */}
        <Box sx={nameInputStyles}>
          <Typography variant="body1" component="label" htmlFor="event-name">
            Введите название
          </Typography>
          <TextField
            id="event-name"
            fullWidth
            placeholder="Название"
            sx={{ "& .MuiOutlinedInput-root": { backgroundColor: "#F4F7FC" } }}
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
                backgroundColor: "#F4F7FC",
                borderRadius: 1,
                "& .MuiSelect-select": { padding: "12px 14px" },
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
            sx={{ backgroundColor: "#F4F7FC" }}
          />
        </Box>

        {/* Первая строка: Дата и Время */}
        <Grid container spacing={3} sx={{ mt: 6, paddingLeft: "100px" }}>
          <Grid item xs={6} md={3}>
            <DatePicker
              label="Дата"
              value={date}
              onChange={setDate}
              format="dd.MM.yyyy"
              sx={{ backgroundColor: "#F4F7FC", width: "100%" }}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <TimePicker
              label="Время"
              value={time}
              onChange={setTime}
              sx={{ backgroundColor: "#F4F7FC", width: "100%" }}
            />
          </Grid>
        </Grid>

        {/* Вторая строка: Для кого мероприятие и Возрастное ограничение */}
        <Grid container spacing={3} sx={{ mt: 6, paddingLeft: "100px" }}>
          <Grid item xs={6} md={3}>
            <FormControl>
              <FormLabel>Для кого мероприятие</FormLabel>
              <RadioGroup defaultValue="student">
                <FormControlLabel
                  value="school"
                  control={
                    <Radio
                      sx={{
                        color: "#F16645",
                        "&.Mui-checked": { color: "#F16645" },
                      }}
                    />
                  }
                  label="Школьник"
                />
                <FormControlLabel
                  value="student"
                  control={
                    <Radio
                      sx={{
                        color: "#F16645",
                        "&.Mui-checked": { color: "#F16645" },
                      }}
                    />
                  }
                  label="Студент"
                />
                <FormControlLabel
                  value="parent"
                  control={
                    <Radio
                      sx={{
                        color: "#F16645",
                        "&.Mui-checked": { color: "#F16645" },
                      }}
                    />
                  }
                  label="Родитель"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={3} sx={{ width: "500px", ml: "55px" }}>
            <FormControl fullWidth>
              <InputLabel>Возрастное ограничение</InputLabel>
              <Select
                defaultValue="0"
                sx={{ backgroundColor: "#F4F7FC", width: "246px" }}
              >
                <MenuItem value="0">0+</MenuItem>
                <MenuItem value="6">6+</MenuItem>
                <MenuItem value="12">12+</MenuItem>
                <MenuItem value="18">18+</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        {/* Описание под блоками */}
        <Box sx={{ paddingLeft: "100px", marginTop: 4, width: "40%" }}>
          <TextField
            fullWidth
            label="Описание"
            multiline
            rows={4}
            inputProps={{ maxLength: 1200 }}
            sx={{
              backgroundColor: "#F4F7FC",
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#F4F7FC",
                padding: 0,
              },
            }}
          />
          <Typography
            variant="caption"
            sx={{ color: "#999", marginTop: "4px", display: "block" }}
          >
            Макс. 1200 символов
          </Typography>
        </Box>

        {/* Кнопка Создать */}
        <Box sx={{ paddingLeft: "100px", marginTop: 6, paddingBottom: 6, width: "40%" }}>
          <Button
            variant="contained"
            size="large"
            fullWidth
            sx={{
              backgroundColor: "#F16645",
              "&:hover": {
                backgroundColor: "#d3543f",
              },
            }}
          >
            Создать
          </Button>
        </Box>
      </Box>
    </LocalizationProvider>
  );
};

export default CreateEventPage;
