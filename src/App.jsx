import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Franchise from './pages/Franchise';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/franchise' element={<Franchise />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
