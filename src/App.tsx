import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import PersonalInfo from './pages/PersonalInfo'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Plans from './pages/Plans'

function App() {
  return (
    <main className='App'>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<PersonalInfo />} />
          <Route path="plans" element={<Plans />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
