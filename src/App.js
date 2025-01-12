import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar/Navbar'
import Card from './components/Navbar/Card'
import Stuffed from './components/Navbar/Stuffed'
import Little from './components/Navbar/Little'
import Fluffy from './components/Navbar/Fluffy'
import Chirst from './components/Navbar/Chirst'
import Loved from './components/Navbar/Loved'
import Rose from './components/Navbar/Rose'
import Dinu from './components/Navbar/Dinu'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>

   
     <BrowserRouter>
     <Navbar/> 
      <Routes>
        
          <Route path="/Card" element={<Card />} />
          <Route path="/Stuffed" element={<Stuffed />} />
          <Route path="/Little" element={<Little />} />
          <Route path="/Fluffy" element={<Fluffy />} />
          <Route path="/Chirst" element={<Chirst />} />
          <Route path="/Loved" element={<Loved />} />
          <Route path="/Rose" element={<Rose />} />
          <Route path="/Dinu" element={<Dinu />} />
        
      </Routes>
    </BrowserRouter> 
    
    
   </> 
  );
}

export default App;
