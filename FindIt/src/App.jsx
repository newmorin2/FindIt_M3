import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './routes/ProtectedRoute'
import CreatePost from './pages/CreatePost'
import Items from './pages/Items'
import ItemDetails from './pages/ItemDetails'
import MyPosts from "./pages/MyPosts";
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter basename="/newmorin2/FindIt_M3">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/items" element={<Items />} />
        <Route path="/create" element={<ProtectedRoute><CreatePost /></ProtectedRoute>} />
        <Route path="/items/:id" element={<ItemDetails />} />
        <Route path="/my-posts" element={<ProtectedRoute><MyPosts /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
