
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Signup from '../Signup/Signup';
import Mobilevereify from "../Mobileverify/Mobileverify"
import Home from '../Home/Home';
import Sucess from '../Mobileverify/Sucess';
import Welcome from '../Mobileverify/Welcome';
import Startpage from '../startpage/Startpage';
import Sidebar from '../startpage/Sidebar';
import JobPostPage from '../Pages/Jobpost/Jobpost';
import Interview from '../Pages/Interview/Interview';
import Shortlisted from '../Pages/Shorlisted/Shortlisted';
import Reviews from '../Pages/Reviews/Reviews';
import { Rating } from "../Pages/Reviews/Reviewstyle";
import Newjob from "../Pages/Jobpost/Post/Newjob";
import Viewjob from "../Pages/Jobpost/Post/Viewjob";
import Application from "../Pages/Jobpost/Post/Application";
// import ViewApplicantsPage from "../Pages/Jobpost/Post/viewapplicant";
// import ApplicantDetailsPage from "../Pages/Jobpost/Post/Resume";
// import  viewApplication from "../Pages/Jobpost/Post/application";
// import Post from "../Pages/Jobpost/Post/post"

function Routing() {
  return (
    <div>
      
    <BrowserRouter>
  
<Routes>
     
        <Route exact path='/' element={<Home />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/mobileverify" element={<Mobilevereify />} />
        <Route path="/sucess" element={<Sucess/>} />
        <Route path="/welcome" element={<Welcome/>} />
        <Route path="/startpage" element={<Startpage/>} />
        <Route path="/sidebar" element={<Sidebar/>} />
        <Route path="/jobpost" element={<JobPostPage/>} />
        <Route path="/interview" element={<Interview/>} />
        <Route path="/shortlisted" element={<Shortlisted/>} />
        <Route path="/reviews" element={<Reviews/>} />
        <Route path="/reviews" element={<Rating/>} />
        <Route path="/newjob" element={<Newjob/>} />
        <Route path="/viewjob" element={<Viewjob/>} />
        <Route path="/application" element={<Application/>} />

     
</Routes>
  </BrowserRouter> 
  </div>
  );
}

export default Routing;
