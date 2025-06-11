import * as React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";

const Background = styled(Box)({
  height: "100vh",
  backgroundColor: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px"
});

const MessageContainer = styled(Box)({
  width: "400px",
  background: "#F1F2F7",
  borderRadius: "12px",
  boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)",
  padding: "40px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center"
});

const MessageText = styled(Typography)({
  fontFamily: "Montserrat",
  fontWeight: 700,
  fontSize: "20px",
  lineHeight: "28px",
  color: "#2A303E",
  marginBottom: "24px"
});

const ReturnButton = styled(Button)({
  background: "#EA6948",
  borderRadius: "8px",
  fontSize: "14px",
  color: "#FFFFFF",
  textTransform: "none",
  padding: "10px 24px",
  "&:hover": {
    background: "#EA6948",
    opacity: 0.9
  }
});

const PasswordUpdatedPage: React.FC = () => {
  const handleReturn = () => {
    // Логика возврата на страницу входа
    window.location.href = "/enter"; 
  };

  return (
    <Background>
      <MessageContainer>
        <MessageText>Пароль успешно обновлен!</MessageText>
        <ReturnButton onClick={handleReturn}>
          Вернуться ко входу
        </ReturnButton>
      </MessageContainer>
    </Background>
  );
};

export default PasswordUpdatedPage;
