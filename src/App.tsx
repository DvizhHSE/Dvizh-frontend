import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import {Box} from "@mui/material";
import { ThemeProviderWrapper } from "./context/ThemeContext";

const MainPage = lazy(() => import('./pages/MainPage'));
const EventsPage = lazy(() => import('./pages/EventsPage'));


function Layout() {
  const location = useLocation();
  const isSpecialPage = location.pathname === "/";

  return (    
    <Box sx={{ 
      display: "flex", 
      flexDirection: "column", 
      height: "100vh" 
    }}>
      {/* {isSpecialPage ? <Header/> : <AlternateHeader/>} */}

      <Box sx={{ flexGrow: 1 }}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/events" element={<EventsPage />} />
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

