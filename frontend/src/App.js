import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Signup from './components/signup/Signup';
import Signin from './components/signin/Signin';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signin/>} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
