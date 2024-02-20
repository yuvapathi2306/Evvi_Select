// import logo from './logo.svg';
import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Auth from "./Auth"
import Signup from './Signup/Signup';
import Home from './Home/Home';
function App() {
  return (
    <div>
      
    <BrowserRouter>
    {/* <Navbar/> */}
    {/* <Signup/> */}
    <Routes>
     
        <Route exact path='/' element={<Home />} />
        <Route path="/signup" element={<Signup/>} />
        
    </Routes>
  </BrowserRouter> 
  </div>
  );
}

export default App;
