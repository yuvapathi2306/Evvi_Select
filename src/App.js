// import logo from './logo.svg';
import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Auth from "./Auth"
import Signup from './Signup/Signup';
import Mobilevereify from "./Mobileverify/Mobileverify"
import Home from './Home/Home';
import Sucess from './Mobileverify/Sucess';
import Welcome from './Mobileverify/Welcome';
import Startpage from './startpage/Startpage';
function App() {
  return (
    <div>
      
    <BrowserRouter>
    {/* <Navbar/> */}
    {/* <Signup/> */}
    <Routes>
     
        <Route exact path='/' element={<Home />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/mobileverify" element={<Mobilevereify />} />
        <Route path="/sucess" element={<Sucess/>} />
        <Route path="/welcome" element={<Welcome/>} />
        <Route path="/startpage" element={<Startpage/>} />


    </Routes>
  </BrowserRouter> 
  </div>
  );
}

export default App;
