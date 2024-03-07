import React from 'react';
import Sidebar from '../../startpage/Sidebar';
import "../Interview/Interview.css"
import cardimg from "../../assets/interview.avif"

const Interview = () => {
  return (
<>
    <div class='job'>
      <Sidebar/>
      <div class="card">
  <div class="card-body">
    <h1>Panel Discussion📌..</h1>
    <p class="card-para">Check the our interview schedule and current status.. </p>
    <img src={cardimg} alt="Recuritment" height={200} width={200} class="cardimg"/>
  </div>
</div>
    </div>
    <div className='d-flex justify-content-center pt-5'>
        <div className='d-flex ps-5'>
            <div className='ps-2 btn btn-light col-4 '>
                <div className='bg-info p-3 rounded-3 border-dark border-bottom border-end shadow'><p>Round 1</p>
                </div>
            </div>
            <div className='ps-2 btn btn-light col-4'><div className='bg-success p-3 rounded-3 border-dark border-bottom border-end shadow'><p>Round 2</p></div></div>
            <div className='ps-2 btn btn-light col-4'><div className='bg-warning p-3 rounded-3 border-dark border-bottom border-end shadow'><p>Round 3</p></div></div>
            {/* <div className='ps-2 btn btn-light col-3'><div className='bg-primary p-3 rounded-3 border-dark border-bottom border-end shadow'><p>Round 3</p></div></div> */}
        </div>
    </div>
    </>
  );
};

export default Interview;