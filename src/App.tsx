import React from 'react';
import './styles/css/antd.css'
import './App.css'

import Home from './Pages/Home'
import Layout from './components/common/internal/Layout'
import Manual from './Pages/Manual'
import Simulator from './Pages/Simulator'
import { Routes, Route, Navigate,  } from 'react-router-dom';
import RequireAuth from './helpers/RequireAuth';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';


const App = () => {
  return (

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route element={<RequireAuth />} >
          <Route element={<Layout />}>
            <Route path='manual' element={<Manual /> } />
            <Route path='simulator' element={<Simulator /> } />
          </Route>
        </Route>
        <Route path='' element={<Navigate to="/" />} />
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
  );
}
export default App;