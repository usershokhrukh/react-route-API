import React from 'react'
import "./assets/style.css"
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import Photos from "./components/Photos";
import Todos from "./components/Todos";
import Users from "./components/Users";
import Albums from "./components/Albums";
import Comments from "./components/Comments";
import { Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Posts/>}/>
        <Route path='/photos' element={<Photos/>}/>
        <Route path='/todos' element={<Todos/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/albums' element={<Albums/>}/>
        <Route path='/comments' element={<Comments/>}/>
        <Route path='*' element={<h2 style={{
          fontFamily: "sans-serif",
        }}>Page Not Found 404</h2>}/>
      </Routes>
    </div>
  )
}

export default App