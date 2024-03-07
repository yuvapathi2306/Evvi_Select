import React from 'react';
import "../Interview/Interview.css"
import Card from './Card';
import "../Dashboard/Dashboard.css"


const Dashboard = () => {


  return (
    <>
    <Card/>
    <div className='d-flex justify-content-center pt-5 ps-5'>
        <div className='d-flex'>
            <div className='ps-2 btn btn-light col-3 '>
                <div className='bg-info p-3 rounded-3 border-dark border-bottom border-end shadow'>
                    <p>No.of.Jobs</p>
                </div>
            </div>
            <div className='ps-2 btn btn-light col-3'><div className='bg-warning p-3 rounded-3 border-dark border-bottom border-end shadow'><p>Pipeline</p></div></div>
            <div className='ps-2 btn btn-light col-3'><div className='bg-success p-3 rounded-3 border-dark border-bottom border-end shadow'><p>Shortlisted</p></div></div>
            <div className='ps-2 btn btn-light col-3'><div className='bg-primary p-3 rounded-3 border-dark border-bottom border-end shadow'><p>Revenue</p></div></div>
        </div>
    </div>
    </>
  );
};

export default Dashboard;