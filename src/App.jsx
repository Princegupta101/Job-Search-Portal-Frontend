

import './App.css'

import { Route, Routes } from 'react-router-dom'

import AboutUs from './Pages/AboutUs'
import Contactpage from './Pages/Contactpage'
import HomePage from './Pages/HomePage'
import JobList from './Pages/jobList'
import NotFound from './Pages/NotFound'
import PostJob from './Pages/PostJob'
import SignIn from './Pages/SignIn'
import Signup from './Pages/Signup'

function App() {
  return (
    <Routes >
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/about' element={<AboutUs/>}></Route>
          <Route path='/contact' element={<Contactpage/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/signin' element={<SignIn/>}></Route>
          <Route path='/viewjob' element={<JobList/>}></Route>
          <Route path='/postjob' element={<PostJob/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
      </Routes>
  )
}

export default App
