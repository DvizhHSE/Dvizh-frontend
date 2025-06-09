import { createContext, ReactNode, useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { light } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles" {
  interface Palette {
    orange: {
      one: string;
      main: string;
      two: string;
      three: string;
      four: string;
    };
  }
  interface PaletteOptions {
    orange?: {
      one?: string;
      main?: string;
      two?: string;
      three?: string;
      four?: string;
    };
  }
  interface TypeBackground {
    light: string;
    light3: string;
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
    two: string,
    three: string,
    four: string,
    white: string;
    black: string;
  }
}

const getTheme = () =>
  createTheme({
    palette: {
      mode: "light", 
      background: {
        default: "#fff", // белый
        light:  "#F1F2F7",
        light3: "#F4F7FC",
      },
      text: { //тут dark
        primary: "#2A303E", //1
        two: "#555965",
        three: "#7F838B",
        four: "#7F838B",
        white: "#fff",
        black: "#000",
      },
      error: { main: "#810F0F" },
      grey: { 500: "#b0afaf" },
      orange: {
        one : "#E6CAC8",
        main: "#F16645", //это main рыжий
        two: "#F0AC9D",
        three: "#EF8E76",
        four: "#EA6948",
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
