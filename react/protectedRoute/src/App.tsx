import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignInPage from './pages/SignInPage'
import HomePage from './pages/HomePage'
import ProtectedRoute from './protectedRoute/ProtectedRoute'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path='/home' element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
