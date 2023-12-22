import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import Profile from './Pages/Profile'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'



const App = () => {
  return (<BrowserRouter>


    <Header />
    <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/login' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route element={<PrivateRoute />} >
        <Route path='/profile' element={<Profile />} />

      </Route>

    </Routes>
  </BrowserRouter>


  )
}

export default App

