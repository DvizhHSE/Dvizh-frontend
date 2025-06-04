import * as React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  FormHelperText,
} from "@mui/material";
import { styled } from "@mui/system";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Background = styled(Box)({
  minHeight: "100vh",
  backgroundColor: "#FFFFFF",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
});

const FormContainer = styled(Box)({
  width: "360px",
  background: "#F1F2F7",
  borderRadius: "16px",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  padding: "32px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

const Title = styled(Typography)({
  fontFamily: "Montserrat",
  fontWeight: 700,
  fontSize: "20px",
  lineHeight: "28px",
  color: "#1A1C28",
  textAlign: "center",
});

const Subtitle = styled(Typography)({
  fontSize: "14px",
  color: "#333",
  textAlign: "center",
});

const StyledTextField = styled(TextField)({
  backgroundColor: "#FFFFFF",
  borderRadius: "8px",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E4E4E8",
    },
    "&:hover fieldset": {
      borderColor: "#EA6948",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#EA6948",
    },
  },
});

const SubmitButton = styled(Button)({
  width: "100%",
  height: "44px",
  background: "#EA6948",
  borderRadius: "10px",
  fontSize: "15px",
  color: "#FFFFFF",
  textTransform: "none",
  "&:hover": {
    background: "#EA6948",
    opacity: 0.9,
  },
});

const NewPasswordPage = () => {
  const [password, setPassword] = React.useState("");
  const [repeatPassword, setRepeatPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [errors, setErrors] = React.useState<{ password?: string; repeatPassword?: string }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!password) newErrors.password = "Введите новый пароль";
    if (!repeatPassword) newErrors.repeatPassword = "Повторите пароль";
    if (password && repeatPassword && password !== repeatPassword) {
      newErrors.repeatPassword = "Пароли не совпадают";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log("Пароль успешно изменён");
      // Здесь можно отправить данные на сервер
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Background>
      <FormContainer>
        <Title>Новый пароль</Title>
        <Subtitle>Введите новый пароль</Subtitle>

        <StyledTextField
          type={showPassword ? "text" : "password"}
          label="Новый пароль"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!errors.password}
          helperText={errors.password}
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <StyledTextField
          type={showPassword ? "text" : "password"}
          label="Повторите пароль"
          variant="outlined"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
          error={!!errors.repeatPassword}
          helperText={errors.repeatPassword}
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <SubmitButton onClick={handleSubmit}>Изменить</SubmitButton>
      </FormContainer>
    </Background>
  );
};

export default NewPasswordPage;
