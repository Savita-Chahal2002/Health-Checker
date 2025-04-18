import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BodyPartChecker from './components/BodyPartChecker';
import BMI from './components/BMI';

const lightTheme = {
  background: '#ffffff',
  text: '#333333',
  primary: '#4a90e2',
  secondary: '#f5f5f5',
};

const darkTheme = {
  background: '#1a1a1a',
  text: '#ffffff',
  primary: '#4a90e2',
  secondary: '#2d2d2d',
};

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  transition: all 0.3s ease;
`;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Router>
        <AppContainer>
          <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bmi" element={<BMI />} />
            <Route path="/checker/:bodyPart" element={<BodyPartChecker />} />
          </Routes>
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App; 