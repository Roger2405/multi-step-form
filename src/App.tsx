import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import PersonalInfo from './pages/PersonalInfo'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Plans from './pages/Plans'
import AddOns from './pages/AddOns'
import Summary from './pages/Summary'

function App() {
  return (
    <div className='App'>
      <main>

        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<PersonalInfo />} />
            <Route path="plans" element={<Plans />} />
            <Route path="add-ons" element={<AddOns />} />
            <Route path="summary" element={<Summary />} />
          </Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
