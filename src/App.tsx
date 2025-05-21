import { useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import {Box} from "@mui/material";
import { ThemeProviderWrapper } from "./context/ThemeContext";
import Header from './components/Header';

const StartPage = lazy(() => import('./pages/StartPage'));
const EventsPage = lazy(() => import('./pages/EventsPage'));
const MainPage = lazy(() => import('./pages/MainPage'));
const PersonalAccount= lazy(() => import('./pages/PersonalAccount'));


function Layout() {
  const location = useLocation();
  const isSpecialPage = location.pathname === "/";

  return (    
    <Box sx={{ 
      display: "flex", 
      flexDirection: "column", 
      height: "100vh" 
    }}>
      {!isSpecialPage && <Header />}

      <Box sx={{ flexGrow: 1 }}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/home" element={<MainPage />} />
            <Route path="/personal-account" element={<PersonalAccount />} />
          </Routes>
        </Suspense>
      </Box>
    </Box>
  );
}

function App() {
  return (
    <ThemeProviderWrapper>
        <BrowserRouter>
              <Layout />
        </BrowserRouter>
    </ThemeProviderWrapper>
  );
}

export default App;

