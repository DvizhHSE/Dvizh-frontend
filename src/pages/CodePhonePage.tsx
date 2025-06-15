    import * as React from "react";
    import { Box, Typography, TextField, Button } from "@mui/material";
    import { styled } from "@mui/system";
import { useNavigate } from 'react-router-dom';

    const Background = styled(Box)({
      minHeight: "100vh",
      width: "100vw",
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

    const Subtitle = styled(Typography)({
      fontSize: "14px",
      color: "#333",
      textAlign: "center",
    });

    const CodeInputContainer = styled(Box)({
      display: "flex",
      gap: "12px",
    });

    const CodeInput = styled(TextField)({
      width: "50px",
      "& .MuiOutlinedInput-root": {
        borderRadius: "8px",
        textAlign: "center",
        fontSize: "15px",
        padding: "10px",
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
        "& input": {
          textAlign: "center",
          padding: "10px",
        },
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

    const ResendButton = styled(Button)<{ disabled: boolean }>(({ disabled }) => ({
      width: "100%",
      height: "44px",
      borderRadius: "10px",
      fontSize: "14px",
      textTransform: "none",
      background: disabled ? "#F4D2CA" : "#EA6948",
      color: "#FFFFFF",
      border: disabled ? "none" : "1px solid #EA6948",
      cursor: disabled ? "default" : "pointer",
      "&:hover": {
        background: disabled ? "#F4D2CA" : "#F4D2CA",
      },
    }));

    const CodePage = () => {
      const [code, setCode] = React.useState(["", "", "", ""]);
      const [seconds, setSeconds] = React.useState(15);
      const [canResend, setCanResend] = React.useState(false);
      const navigate = useNavigate();

      React.useEffect(() => {
        if (!canResend && seconds > 0) {
          const timer = setTimeout(() => setSeconds((s) => s - 1), 1000);
          return () => clearTimeout(timer);
        } else if (seconds === 0) {
          setCanResend(true);
        }
      }, [seconds, canResend]);

      const handleChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (/^\d?$/.test(value)) {
          const newCode = [...code];
          newCode[index] = value;
          setCode(newCode);
          if (value && index < 3) {
            const nextInput = document.getElementById(`code-input-${index + 1}`);
            if (nextInput) nextInput.focus();
          }
        }
      };

      const handleResend = () => {
        setCode(["", "", "", ""]);
        setSeconds(15);
        setCanResend(false);
      };

      return (
        <Background>
          <LoginContainer>
            <Title>Введите код</Title>
            <Subtitle>Мы отправили код на +7 (961) 380-30-39</Subtitle>
            <CodeInputContainer>
              {code.map((digit, index) => (
                <CodeInput
                  key={index}
                  id={`code-input-${index}`}
                  variant="outlined"
                  value={digit}
                  onChange={handleChange(index)}
                  inputProps={{ maxLength: 1 }}
                />
              ))}
            </CodeInputContainer>
            <SubmitButton onClick={() => navigate('/new-password')}>
  Далее
</SubmitButton>
            <ResendButton onClick={handleResend} disabled={!canResend}>
              {canResend
                ? "Отправить код снова"
                : `Отправить код снова через 00:${seconds.toString().padStart(2, "0")}`}
            </ResendButton>
          </LoginContainer>
        </Background>
      );
    };

    export default CodePage;
