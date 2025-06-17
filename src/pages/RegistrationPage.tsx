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
import { useNavigate } from "react-router-dom"; // 👈 добавлено
import { useRegistration } from "../RegistrationContext"; // 👈 добавлено

const Background = styled(Box)({
  height: "100vh",
  width: "100vw",
  backgroundColor: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px"
});

const FormContainer = styled(Box)({
  width: "400px",
  background: "#F1F2F7",
  borderRadius: "12px",
  boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)",
  padding: "40px",
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
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

const RegistrationPage: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirm, setShowConfirm] = React.useState(false);

  const navigate = useNavigate(); // 👈 хук навигации
  const { setData } = useRegistration(); // 👈 доступ к контексту

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      alert("Пароли не совпадают");
      return;
    }

    setData(prev => ({
      ...prev,
      email,
      password,
    }));

    navigate("/onboarding-form"); // 👈 замени на нужный путь
  };

  return (
    <Background>
      <FormContainer>
        <Title>Регистрация</Title>

        <StyledTextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
          type="email"
        />

        <StyledTextField
          label="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />

        <StyledTextField
          label="Повторите пароль"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          variant="outlined"
          type={showConfirm ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowConfirm(!showConfirm)} edge="end">
                  {showConfirm ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />

        <SubmitButton onClick={handleSubmit}>
          Зарегистрироваться
        </SubmitButton>

        <Box textAlign="center">
          <Typography fontSize="14px" color="#6B7280" component="span">
            У вас уже есть аккаунт?{" "}
          </Typography>
          <Link href="/enter" underline="hover" fontWeight="500" fontSize="14px">
            Войти
          </Link>
        </Box>
      </FormContainer>
    </Background>
  );
};

export default RegistrationPage;
