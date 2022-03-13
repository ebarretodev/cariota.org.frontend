import React from 'react';
import './App.css'
import './styles/css/antd.css'

import Home from './Pages/Home'
import Layout from './components/common/internal/Layout'
import Manual from './Pages/Manual'
import Simulator from './Pages/Simulator'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<Layout />}>
          <Route path='manual' element={<Manual />} />
          <Route path='simulator' element={<Simulator />} />
        </Route>
        <Route path='' element={<Navigate to="/" />} />
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;