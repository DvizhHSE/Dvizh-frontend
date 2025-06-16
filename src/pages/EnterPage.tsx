import * as React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Link
} from "@mui/material";
import { styled } from "@mui/system";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from "../api/axios";

const Background = styled(Box)({
  minHeight: "100vh",
  width: "99vw",
  backgroundColor: "#FFFFFF",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
});
const LoginContainer = styled(Box)({
  width: "360px",
  background: "#F1F2F7",
  borderRadius: "16px",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  padding: "32px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
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

const StyledTextField = styled(TextField)({
  width: "100%",
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    backgroundColor: "#FFFFFF",
    "& fieldset": {
      borderColor: "#E4E4E8"
    },
    "&:hover fieldset": {
      borderColor: "#EA6948"
    },
    "&.Mui-focused fieldset": {
      borderColor: "#EA6948"
    }
  }
});

const SubmitButton = styled(Button)({
  width: "100%",
  height: "48px",
  background: "#EA6948",
  borderRadius: "10px",
  fontSize: "16px",
  color: "#FFFFFF",
  textTransform: "none",
  "&:hover": {
    background: "#EA6948",
    opacity: 0.9
  }
});

const LoginPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { setUserId } = useAuth(); 
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await api.post('api/users/login', null, {
        params: { email, password }
      });
  
      // В Axios успешный ответ приходит в res.data
      const data = res.data;
  
      setUserId(data._id);  // обновляем контекст
      navigate("/home");
    } catch (err) {
      console.error("Ошибка при входе:", err);
      alert("Неверный email или пароль");
    }
  };
  
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  

  return (
    <Background>
      <LoginContainer>
        <Title>Вход</Title>
        <StyledTextField label="Email" variant="outlined" value={email}
        onChange={(e) => setEmail(e.target.value)} />
        <StyledTextField
          label="Пароль"
          variant="outlined"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        <Box width="100%" textAlign="right">
          <Link href="/forgot-password" underline="hover" fontSize="14px" color="#6B7280">
            Забыли пароль?
          </Link>
        </Box>
        <SubmitButton onClick={handleLogin}>Войти</SubmitButton>
        <Typography fontSize="14px" color="#6B7280">
          У вас еще нет аккаунта?{" "}
          <Link href="/registration" underline="hover" fontWeight="500">
            Зарегистрируйтесь сейчас
          </Link>
        </Typography>
      </LoginContainer>
    </Background>
  );
};

export default LoginPage;
