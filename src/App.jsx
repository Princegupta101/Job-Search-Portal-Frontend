

import { Route, Routes } from 'react-router-dom'

import AboutUs from './Pages/AboutUs'
import HomePage from './Pages/HomePage'
import NotFound from './Pages/NotFound'
import SignIn from './Pages/Singin'
import SignupPage from './Pages/Singup'

import './App.css'

function App() {
  return (
    <Routes >
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/about' element={<AboutUs/>}></Route>

          <Route path='/signup' element={<SignupPage/>}></Route>
          <Route path='/signin' element={<SignIn/>}></Route>

          <Route path='*' element={<NotFound/>}></Route>
      </Routes>
  )
}

export default App
