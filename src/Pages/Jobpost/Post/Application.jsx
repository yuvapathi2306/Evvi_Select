
// import React, { useState } from 'react';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// const Application = () => {
//   const [formData, setFormData] = useState({
//     companyName: '',
//     jobTitle: '',
//     numberOfVacancies: '',
//     jobLocation: '',
//     message: ''
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   return (
//     <div className='bg'>   
//       <Container className="mt-5 bg-info border border-info">
//         <Row>
//           <Col>
//             <h1 className='text-center'>Company Recruitment Application</h1>
//           </Col>
//         </Row>
//         <Row className="mt-3">
//           <Col>
//             {/* <Form onSubmit={handleSubmit}> */}
//             <Form>
//               <Form.Group controlId="formCompanyName">
//                 <Form.Label>Company Name</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter company name"
//                   name="companyName"
//                   value={formData.companyName}
//                   onChange={handleChange}
//                   required
//                 />
//               </Form.Group>

//               <Form.Group controlId="formJobTitle">
//                 <Form.Label>Job Title</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter job title"
//                   name="jobTitle"
//                   value={formData.jobTitle}
//                   onChange={handleChange}
//                   required
//                 />
//               </Form.Group>

//               <Form.Group controlId="formNumberOfVacancies">
//                 <Form.Label>Number of Vacancies</Form.Label>
//                 <Form.Control
//                   type="number"
//                   placeholder="Enter number of vacancies"
//                   name="numberOfVacancies"
//                   value={formData.numberOfVacancies}
//                   onChange={handleChange}
//                   required
//                 />
//               </Form.Group>

//               <Form.Group controlId="formJobLocation">
//                 <Form.Label>Job Location</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter job location"
//                   name="jobLocation"
//                   value={formData.jobLocation}
//                   onChange={handleChange}
//                   required
//                 />
//               </Form.Group>

//               <Form.Group controlId="formMessage">
//                 <Form.Label>Job description</Form.Label>
//                 <Form.Control
//                   as="textarea"
//                   rows={3}
//                   placeholder="Write your message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                 />
//               </Form.Group>
//               <Link to="/newjob">
//   <Button variant="primary ms-5 mt-2" type="submit">
//     Submit Application
//   </Button>
// </Link>

//             </Form>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default Application;





import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Viewjob from './Viewjob';
import '../Post/Application.css'

const Application = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    jobTitle: '',
    numberOfVacancies: '',
    jobLocation: '',
    message: ''
  });

  const [submittedData, setSubmittedData] = useState(null); // State to store submitted data

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit formData to server or handle form submission logic here
    console.log(formData);
    // Store submitted data in state
    setSubmittedData(formData);
    // Reset form fields after submission
    setFormData({
      companyName: '',
      jobTitle: '',
      numberOfVacancies: '',
      jobLocation: '',
      message: ''
    });
  };

  return (
    // <>
    <div className='bg'>   
      <Container className="mt-5 bg-info border border-info">
        <Row>
          <Col>
            <h1 className='text-center'>Company Recruitment Application</h1>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <Form onSubmit={handleSubmit}>
             <div class='list1'>

              <Form.Group controlId="formCompanyName">
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter company name"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formJobTitle">
                <Form.Label>Job Title</Form.Label>
                 <Form.Control
                  type="text"
                  placeholder="Enter job title"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              </div>
              <div class='list2'>
              <Form.Group controlId="formNumberOfVacancies">
                <Form.Label>Number of Vacancies</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter number of vacancies"
                  name="numberOfVacancies"
                  value={formData.numberOfVacancies}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formJobLocation">
                <Form.Label>Job Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter job location"
                  name="jobLocation"
                  value={formData.jobLocation}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              </div>

              {/* <Form.Group controlId="formMessage">
                <Form.Label>Job description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Write your message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group> */}

              {/* Other form fields */}
              
              <div className="text-center p-3">
                <Button variant="primary" type="submit">
                  Submit Application
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
      

      {/* Display submitted data */}
      {submittedData && <Viewjob applicationData={submittedData} />}
      {/* </> */}
    </div>
    
  );
}

// const ViewJob = ({ applicationData }) => {
//   return (
//     <Container className="mt-5 bg-light border border-info">
//       <Row>
//         <Col>
//           <h1 className='text-center'>Application Details</h1>
//         </Col>
//       </Row>
//       <Row className="mt-3">
//         <Col>
//           <p><strong>Company Name:</strong> {applicationData.companyName}</p>
//           <p><strong>Job Title:</strong> {applicationData.jobTitle}</p>
//           <p><strong>Number of Vacancies:</strong> {applicationData.numberOfVacancies}</p>
//           <p><strong>Job Location:</strong> {applicationData.jobLocation}</p>
//           <p><strong>Message:</strong> {applicationData.message}</p>
//         </Col>
//       </Row>
//       <Row className="mt-3">
//         <Col className="text-center">
//           <Link to="/"><Button variant="success" className="ms-2">Save</Button></Link>
//           <Link to="/"><Button variant="danger" className="ms-2">Cancel</Button></Link>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

export default Application;

