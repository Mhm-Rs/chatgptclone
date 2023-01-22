import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Imgenerator from './pages/Imgenerator'
import Chat from './pages/Chat'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Chat/>}></Route>
      <Route path='/imgenerator' element={<Imgenerator/>}></Route>
    </Routes>
  </BrowserRouter>,
)
