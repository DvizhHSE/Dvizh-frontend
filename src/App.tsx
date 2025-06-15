
import * as React from "react";

import { useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import {Box} from "@mui/material";
import { ThemeProviderWrapper } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import Header from './components/Header';
import CreateEventPage from './pages/CreateEventPage';
import Footer from './components/Footer';

const StartPage = lazy(() => import('./pages/StartPage'));
const EventsPage = lazy(() => import('./pages/EventsPage'));
const MainPage = lazy(() => import('./pages/MainPage'));
const EnterPage = lazy(() => import('./pages/EnterPage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage'));
const ForgotPasswordPage = lazy(() => import('./pages/ForgotPasswordEmailPage'));
const PhoneLoginPage = lazy(() => import('./pages/PhoneLoginPage'));
const CodePhonePage = lazy(() => import('./pages/CodePhonePage'));
const CodeEmailPage = lazy(() => import('./pages/CodeEmailPage'));
const NewPasswordPage = lazy(() => import('./pages/NewPasswordPage'));
const PasswordUpdatedPage = lazy(() => import('./pages/PasswordUpdatedPage'));
const OnboardingFormPage = lazy(() => import('./pages/OnboardingFormPage'));

const EventDetailsPage = lazy(() => import('./pages/EventDetailsPage'));
const PersonalAccount= lazy(() => import('./pages/PersonalAccount'));

function Layout() {
  const location = useLocation();
  const isSpecialPage = location.pathname === "/" ||
    location.pathname === "/enter" ||
    location.pathname === "/registration" ||
    location.pathname === "/forgot-password" ||
    location.pathname === "/phone-login" ||
    location.pathname === "/code-phone" ||
    location.pathname === "/code-email" ||
    location.pathname === "/new-password" ||
    location.pathname === "/password-updated" ||
    location.pathname === "/onboarding-form";

  const isSpecialPage2 = location.pathname === "/onboarding-form" ||
    location.pathname === "/enter" ||
    location.pathname === "/registration" ||
    location.pathname === "/forgot-password" ||
    location.pathname === "/phone-login" ||
    location.pathname === "/code-phone" ||
    location.pathname === "/code-email" ||
    location.pathname === "/new-password" ||
    location.pathname === "/password-updated";
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
            <Route path="/event/:id" element={<EventDetailsPage />} />
            <Route path="/home" element={<MainPage />} />

            <Route path="/enter" element={<EnterPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/phone-login" element={<PhoneLoginPage />} />
            <Route path="/code-phone" element={<CodePhonePage />} />
            <Route path="/code-email" element={<CodeEmailPage />} />
            <Route path="/new-password" element={<NewPasswordPage />} />
            <Route path="/password-updated" element={<PasswordUpdatedPage />} />
            <Route path="/onboarding-form" element={<OnboardingFormPage />} />
            
            

            <Route path="/create-event" element={<CreateEventPage />} />
            <Route path="/personal-account" element={<PersonalAccount />} />
          </Routes>
        </Suspense>
      </Box>

      {!isSpecialPage2 && <Footer />}
    </Box>
  );
}

function App() {
  return (
    <ThemeProviderWrapper>
      <AuthProvider>
        <BrowserRouter>
              <Layout />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProviderWrapper>
  );
}

export default App;

