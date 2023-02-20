import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import LandingPage from './components/00-Home/LandingPage';
import Destinations from './components/01-Destinations/Destinations';
import Crew from './components/02-Crew/Crew';
import Tech from './components/03-Technology/Tech';
import GlobalStyles from './styles/Global';
import { theme } from './styles/theme'


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/destination' element={<Destinations />} />
        <Route path='/crew' element={<Crew />} />
        <Route path='/technology' element={<Tech />} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;