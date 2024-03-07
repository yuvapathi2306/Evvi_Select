import React from 'react';
import Sidebar from '../../startpage/Sidebar';
import "../Jobpost/Jobpost.css"
// import Card from '../Dashboard/Card';
import cardimg from "../../assets/jobimg.jpg"
import "../Dashboard/Dashboard.css"



const JobPostPage = () => {
  return (
    <>
    <div class='job'>
      <Sidebar/>
      <div class="card">
  <div class="card-body">
    <h1>Jobs</h1>
    <p class="card-para">Find talents for these jobs and select the Right Candidates.. </p>
    <img src={cardimg} alt="Recuritment" height={200} width={200} class="cardimg"/>
  </div>
</div>
    </div>
    <div className='d-flex justify-content-center pt-5'>
        <div className='d-flex ps-5'>
            <div className='ps-2 btn btn-light col-4 '>
                <div className='bg-info p-3 rounded-3 border-dark border-bottom border-end shadow'>
                    <p className='post'><a href="\application">Post</a></p>
                </div>
            </div>
            <div className='ps-2 btn btn-light col-4'><div className='bg-success p-3 rounded-3 border-dark border-bottom border-end shadow'><p>Opening</p></div></div>
            <div className='ps-2 btn btn-light col-4'><div className='bg-warning p-3 rounded-3 border-dark border-bottom border-end shadow'><p>Closed</p></div></div>
            {/* <div className='ps-2 btn btn-light col-3'><div className='bg-primary p-3 rounded-3 border-dark border-bottom border-end shadow'><p>Revenue</p></div></div> */}
        </div>
    </div>
    </>
  );
};

export default JobPostPage;