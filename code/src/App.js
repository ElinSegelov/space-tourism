import React from 'react';
import { BrowserRouter, Routes, Route, /* Navigate */ } from 'react-router-dom';
import LandingPage from './components/00-Home/LandingPage';
import Destinations from './components/01-Destinations/Destinations';
import Crew from './components/02-Crew/Crew';
import Tech from './components/03-Technology/Tech';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/destination' element={<Destinations />} />
        <Route path='/crew' element={<Crew />} />
        <Route path='/technology' element={<Tech />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;