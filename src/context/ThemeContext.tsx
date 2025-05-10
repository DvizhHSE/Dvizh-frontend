import React, { createContext, ReactNode, useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

declare module "@mui/material/styles" {
  interface Palette {
    purple: {
      light: string;
      main: string;
      dark: string;
      onHover: string;
      toClick: string;
    };
  }
  interface PaletteOptions {
    purple?: {
      light?: string;
      main?: string;
      dark?: string;
      contrastText?: string;
      onHover?: string;
      toClick?: string;
    };
  }
  interface TypeBackground {
    card: string;
    cardContent: string;
    textCard: string;
  }
  interface Theme {
    shape: {
      borderRadius: string;
      cardRadius: string; 
    };
  }
  interface ThemeOptions {
    shape?: {
      borderRadius?: string;
      cardRadius?: string;
    };
  }
  interface TypeText {
    white: string;
    black: string;
  }
}

const getTheme = () =>
  createTheme({
    palette: {
      mode: "light", 
      background: {
        default: "#fff",
        paper: "#F1F2F7", //это у нее light
        card: "#eaddff",
        cardContent: "#EEEAF6",
        textCard: "#EEEEEE",
      },
      text: {
        primary: "#2A303E",
        secondary: "#fff",
        white: "#fff",
        black: "#000",
      },
      error: { main: "#810F0F" },
      grey: { 500: "#b0afaf" },
      purple: {
        light: "#B13EEA",
        main: "#F16645",
        dark: "#755088",
        onHover: "238, 230, 255",
        toClick: "#D3C5F4",
      },
    },
    typography: {
      fontFamily: "'Montserrat', sans-serif",
      h1: {
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "90px",
        lineHeight: "1.2",
        fontWeight: "bold",
        letterSpacing: "1px",
      },
      allVariants: {
        wordBreak: "break-word",
        textTransform: "none",
      },
    },
    spacing: 4,
    shape: {
      borderRadius: "8px",
      cardRadius: "20px",
    },
  });

interface ThemeContextType {
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProviderWrapper = ({ children }: { children: ReactNode }) => {
  const theme = useMemo(() => getTheme(), []);

  const toggleTheme = () => {
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
