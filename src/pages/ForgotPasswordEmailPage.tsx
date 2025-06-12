import * as React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Link
} from "@mui/material";
import { styled } from "@mui/system";

import { useNavigate } from 'react-router-dom';
const Background = styled(Box)({
  width: "100vw",
  height: "100vh",
  backgroundColor: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px"
});

const Container = styled(Box)({
  width: "100%",
  maxWidth: "420px",
  padding: "32px",
  backgroundColor: "#F1F2F7",
  borderRadius: "16px",
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
  display: "flex",
  flexDirection: "column",
  gap: "20px"
});

const Title = styled(Typography)({
  fontSize: "24px",
  fontWeight: 700,
  color: "#2A303E"
});

const Description = styled(Typography)({
  fontSize: "14px",
  color: "#4B5563"
});

const StyledTextField = styled(TextField)({
  backgroundColor: "#fff",
  borderRadius: "10px",
  "& .MuiOutlinedInput-root": {
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

const StyledButton = styled(Button)({
  backgroundColor: "#EA6948",
  color: "#fff",
  height: "44px",
  borderRadius: "10px",
  textTransform: "none",
  fontWeight: 500,
  "&:hover": {
    backgroundColor: "#d65b3e"
  }
});

const ForgotPasswordPage: React.FC = () => {
  
  const navigate = useNavigate();
  return (
    <Background>
      <Container>
        <Title>Забыли пароль?</Title>
        <Description>
          Не волнуйтесь! Пожалуйста, введите адрес электронной почты,
          связанный с вашей учетной записью.
        </Description>
        <StyledTextField
          label="Email"
          variant="outlined"
          fullWidth
        />
        <StyledButton>Отправить код</StyledButton>
        <StyledButton onClick={() => navigate('/phone-login')} variant="outlined" sx={{
          backgroundColor: "#EA6948",
          color: "#fff",
          "&:hover": { backgroundColor: "#d65b3e" }
        }}>
          Восстановить доступ по номеру телефона
        </StyledButton>
      </Container>
    </Background>
  );
};

export default ForgotPasswordPage;
