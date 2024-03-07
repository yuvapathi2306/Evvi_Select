// import React from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';

// const Newjob = () => {
//   return (
//     <Container className="mt-5">
//       <Row>
//         <Col>
//           <h1>Job Post</h1>
//         </Col>
//       </Row>
//       <Row className="mt-3">
//         <Col>
//           <Card>
//             <Card.Body>
//               <Card.Title>Software Engineer</Card.Title>
//               <Card.Subtitle className="mb-2 text-muted">Company ABC</Card.Subtitle>
//               <Card.Text>
//                 We are looking for a talented software engineer to join our team. If you are passionate about coding and building innovative solutions, we want to hear from you!
//               </Card.Text>
//               <a href="\jobapplication"><Button variant="primary">Apply Now</Button></a>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Newjob;






// import React, { useState } from 'react';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// const Newjob = () => {
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

// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     // Submit formData to server or handle form submission logic here
// //     console.log(formData);
// //     // Reset form fields after submission
// //     setFormData({
// //       companyName: '',
// //       jobTitle: '',
// //       numberOfVacancies: '',
// //       jobLocation: '',
// //       message: ''
// //     });
// //   };




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
//               <Link to="/viewjob">
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

// export default Newjob;






import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import ViewApplicationDetails from './Viewjob'; // Import the ViewApplicationDetails component

const Newjob = () => {
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
              <Form.Group controlId="formCompanyName">
                {/* Form inputs */}
              </Form.Group>
              {/* Other form fields */}
              <div class="col-md-12 text-center">
 <Button className="primary" type="submit">
                Submit Application
              </Button></div>
            </Form>
          </Col>
        </Row>
      </Container>

      {/* Display submitted data */}
      {submittedData && <ViewApplicationDetails applicationData={submittedData} />}
    </div>
  );
}

export default Newjob;








