import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Login from './Login'
import Count from './Count'
import Arraylist from './Arraylist'
import Api from './Api'
import Fetch from './Fetch'
import Apis from './Apis'
import Page from './Page'
import Figma from './Figma'


function App() {
  return (
    <Router>
      <div>
      <Routes>
       <Route path='/' element={<Login/>}/>
       <Route path='/About' element={<About/>}/>
       <Route path='/Contact' element={<Contact/>}/>
       <Route path='/Home' element={<Home/>}/>
       <Route path='/count' element={<Count/>}/>
       <Route path='/arraylist' element={<Arraylist/>}/>
       <Route path='/api' element={<Api/>}/>
       <Route path='/fetch'element={<Fetch/>}/>
      <Route path='/apis' element={<Apis/>}/>
      <Route path='/page' element={<Page/>}/>
      <Route path='/figma' element={<Figma/>}/>
      </Routes>
      
      </div>
    </Router>
  )
}

export default App