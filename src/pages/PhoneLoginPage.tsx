import * as React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from 'react-router-dom';

const Background = styled(Box)({
  minHeight: "100vh",
  width: "100vw",
  backgroundColor: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px"
});


const LoginContainer = styled(Box)({
  width: "400px",
  background: "#F1F2F7",
  borderRadius: "12px",
  boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)",
  padding: "40px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "24px"
});

const Title = styled(Typography)({
  fontFamily: "Montserrat",
  fontWeight: 700,
  fontSize: "28px",
  lineHeight: "36px",
  color: "#2A303E",
  textAlign: "center"
});

const StyledTextField = styled(TextField)({
  width: "100%",
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    backgroundColor: "#fff",
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
const PhoneLoginPage = () => {
  
        const navigate = useNavigate();
  return (
    <Background>
      <LoginContainer>
        <Title>Введите ваш номер телефона</Title>
        <StyledTextField label="Телефон" variant="outlined" />
        <SubmitButton>Отправить код</SubmitButton>
        <SubmitButton onClick={() => navigate('/forgot-password')}>
          Восстановить доступ по адресу эл. почты
</SubmitButton>
      </LoginContainer>
    </Background>
  );
};

export default PhoneLoginPage;
