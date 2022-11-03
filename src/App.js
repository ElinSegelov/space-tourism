import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './components/00-Home/LandingPage';
import styled from 'styled-components';
import Header from './components/Header';
import { OuterWrapper } from './components/ReusableStyles';
import Destinations from './components/01-Destinations/Destinations';
import Crew from './components/02-Crew/Crew';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/destination' element={<Destinations />} />
        <Route path='/crew' element={<Crew />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

/* const OuterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
` */