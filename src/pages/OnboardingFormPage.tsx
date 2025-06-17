import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  MenuItem
} from "@mui/material";
import { styled } from "@mui/system";
import { AnimatePresence, motion } from "framer-motion";
import api from "../api/axios";
import { useRegistration } from "../RegistrationContext";

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
  gap: "16px",
  overflow: "hidden"
});

const Title = styled(Typography)({
  fontFamily: "Montserrat",
  fontWeight: 700,
  fontSize: "22px",
  lineHeight: "30px",
  color: "#2A303E",
  textAlign: "center"
});

const StyledTextField = styled(TextField)({
  width: "100%",
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    backgroundColor: "#fff"
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

const FieldWrapper = styled(Box)({
  marginBottom: "20px"
});

const StepIndicators = styled(Box)({
  display: "flex",
  justifyContent: "center",
  gap: "8px",
  marginTop: "8px"
});

const Dot = styled("div")<{ active?: boolean }>(({ active }) => ({
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  backgroundColor: active ? "#EA6948" : "#D9D9D9"
}));

const stepVariants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 }
};

const OnboardingForm: React.FC = () => {
  const { data, setData } = useRegistration();
  const [step, setStep] = React.useState(0);

  // Локальный стейт синхронизируем с контекстом
  const [localData, setLocalData] = React.useState({
    firstName: data.firstName || "",
    lastName: data.lastName || "",
    birthDate: data.birthDate || "",
    gender: data.gender || "",
    roles: data.roles || []
  });

  React.useEffect(() => {
    setLocalData({
      firstName: data.firstName || "",
      lastName: data.lastName || "",
      birthDate: data.birthDate || "",
      gender: data.gender || "",
      roles: data.roles || []
    });
  }, [data]);

  const handleNext = () => {
    setData((prev) => ({ ...prev, ...localData }));
    setStep((prev) => Math.min(prev + 1, 2));
  };

  const handleChange = (field: string, value: string | string[]) => {
    setLocalData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleRole = (role: string) => {
    setLocalData((prev) => {
      const updatedRoles = prev.roles.includes(role)
        ? prev.roles.filter((r) => r !== role)
        : [...prev.roles, role];
      return { ...prev, roles: updatedRoles };
    });
  };

  const handleSubmit = async () => {
    setData((prev) => ({ ...prev, ...localData }));

    const payload = {
      birthday: data.birthDate || localData.birthDate,
      name: data.firstName || localData.firstName,
      surname: data.lastName || localData.lastName,
      sex: data.gender || localData.gender,
      role: (data.roles && data.roles[0]) || (localData.roles[0] || ""),
      email: data.email,
      password: data.password
    };
      console.log("📦 Отправляем в API:", payload); // ← ← ← ВОТ ЭТА СТРОКА

    try {
      await api.post("/users/register", payload);

      alert("Регистрация прошла успешно!");
    } catch (error) {
      console.error("Ошибка при регистрации:", error);
        console.log("Детали от сервера:", error.response?.data); // <- добавь это

      alert("Ошибка при регистрации. Проверьте данные.");
    }
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <motion.div key="step1" variants={stepVariants} initial="initial" animate="animate" exit="exit">
            <Title>Здравствуйте!</Title>
            <Typography textAlign="center" fontSize="14px" color="#6B7280">
              Давайте познакомимся! Пожалуйста, введите ваше имя и фамилию.
            </Typography>
            <FieldWrapper>
              <StyledTextField
                label="Имя"
                value={localData.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
              />
            </FieldWrapper>
            <FieldWrapper>
              <StyledTextField
                label="Фамилия"
                value={localData.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
              />
            </FieldWrapper>
            <SubmitButton onClick={handleNext}>Далее</SubmitButton>
          </motion.div>
        );
      case 1:
        return (
          <motion.div key="step2" variants={stepVariants} initial="initial" animate="animate" exit="exit">
            <Title>Больше данных...</Title>
            <Typography textAlign="center" fontSize="14px" color="#6B7280">
              Укажите дату рождения и пол.
            </Typography>
            <FieldWrapper>
              <StyledTextField
                type="date"
                value={localData.birthDate}
                onChange={(e) => handleChange("birthDate", e.target.value)}
                InputLabelProps={{ shrink: true }}
                label="Дата рождения"
              />
            </FieldWrapper>
            <FieldWrapper>
              <StyledTextField
                select
                label="Пол"
                value={localData.gender}
                onChange={(e) => handleChange("gender", e.target.value)}
              >
                <MenuItem value="Мужской">Мужской</MenuItem>
                <MenuItem value="Женский">Женский</MenuItem>
                <MenuItem value="Не указано">Не указано</MenuItem>
              </StyledTextField>
            </FieldWrapper>
            <SubmitButton onClick={handleNext}>Далее</SubmitButton>
          </motion.div>
        );
      case 2:
        return (
          <motion.div key="step3" variants={stepVariants} initial="initial" animate="animate" exit="exit">
            <Title>Кто вы?</Title>
            <Typography textAlign="center" fontSize="14px" color="#6B7280">
              Укажите, кто вы (можно выбрать несколько вариантов).
            </Typography>
            <Box mb={2}>
              {["Школьник", "Студент", "Родитель", "Педагог/Наставник", "Организатор", "Другое"].map(
                (role) => (
                  <FormControlLabel
                    key={role}
                    control={
                      <Checkbox
                        checked={localData.roles.includes(role)}
                        onChange={() => toggleRole(role)}
                      />
                    }
                    label={role}
                  />
                )
              )}
            </Box>
            <SubmitButton onClick={handleSubmit}>Завершить</SubmitButton>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <Background>
      <FormContainer>
        <AnimatePresence mode="wait">{renderStep()}</AnimatePresence>
        <StepIndicators>
          {[0, 1, 2].map((i) => (
            <Dot key={i} active={i === step} />
          ))}
        </StepIndicators>
      </FormContainer>
    </Background>
  );
};

export default OnboardingForm;
