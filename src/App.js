import React from "react";
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Signup from "./components/login&signup/Signup";
import Login from "./components/login&signup/Login";
import Home from "./components/home/Home";
import ProtectedRoutes from './components/ProtectedRoutes'

function App(){
  return (
<>
<BrowserRouter>
<Routes>
<Route path='/' element={<Login/>} />
<Route path="/signup" element={<Signup/>} />
<Route element={<ProtectedRoutes/>} />
    <Route path='/home' element={<Home/>} />


</Routes>


</BrowserRouter>
 
</>
  )
}
export default App