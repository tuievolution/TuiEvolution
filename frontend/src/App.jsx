import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {AboutUs, Main, Projects} from './pages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <header>
        <NavBar/>
      </header>

      <main>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/AboutUs' element={<AboutUs/>} />
          <Route path='/Projects' element={<Projects/>} />
        </Routes>
      </main>


    </BrowserRouter>
  )
}

export default App
