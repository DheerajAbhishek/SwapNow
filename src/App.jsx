import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Franchise from './pages/Franchise';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MealPlannerPage from './pages/MealPlannerPage';
import { AuthProvider } from './context/AuthContext';

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/bmr-cal' element={<HomePage openBmrCalculator />} />
                    <Route path='/meal-planner' element={<MealPlannerPage />} />
                    <Route path='/franchise' element={<Franchise />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
