import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '@/pages/Login/Login'
import worker from '@/mocks/browser.ts'
import Dashboard from '@/pages/Dashboard'
import WantDetail from '@/pages/WantDetail'

if (import.meta.env.MODE === 'development') {
  void worker.start()
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/want/:wantId" element={<WantDetail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
