// import React, { useState } from 'react';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';


// const JobApplicationForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     coverLetter: ''
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Submit formData to server or handle form submission logic here
//     console.log(formData);
//     // Reset form fields after submission
//     setFormData({
//       fullName: '',
//       email: '',
//       coverLetter: ''
//     });
//   };

//   return (
//     <div class='bg-info'>   
//      <Container className="mt-5 bg-light border border-light">
//       <Row>
//         <Col>
//           <h1 className='text-center'>Job Application</h1>
//         </Col>
//       </Row>
//       <Row className="mt-3">
//         <Col>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="formFullName">
//               <Form.Label>Full Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter your full name"
//                 name="fullName"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>

//             <Form.Group controlId="formEmail">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter your email address"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>

//             <Form.Group controlId="formCoverLetter">
//               <Form.Label>Cover Letter</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={5}
//                 placeholder="Write your cover letter"
//                 name="coverLetter"
//                 value={formData.coverLetter}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>

//             <a href="\viewapplicant"><Button variant="primary" type="submit">
//               Submit Application
//             </Button></a>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//     </div>

//   );
// }

// export default JobApplicationForm;


// import React, { useState } from 'react';
// import { Container, Row, Col, Table } from 'react-bootstrap';

// const JobApplicationForm = () => {
//   // Sample data for demonstration purposes
//   const [applicants] = useState([
//     { id: 1, fullName: 'John Doe', email: 'john@example.com', resume: 'John_Doe_Resume.pdf', appliedPosition: 'Software Engineer' },
//     { id: 2, fullName: 'Jane Smith', email: 'jane@example.com', resume: 'Jane_Smith_Resume.pdf', appliedPosition: 'Web Developer' },
//     // Add more sample applicants as needed
//   ]);

//   const applicantCount = applicants.length;

//   return (
//     <Container className="mt-5">
//       <Row>
//         <Col>
//           <h1>View Recruitment Applicants</h1>
//         </Col>
//       </Row>
//       <Row className="mt-3">
//         <Col>
//           <h3>Total Applicants: {applicantCount}</h3>
//           <Table striped bordered hover>
//             <thead>
//               <tr>
//                 <th>#</th>
//                 <th>Full Name</th>
//                 <th>Email</th>
//                 <th>Resume</th>
//                 <th>Applied Position</th>
//               </tr>
//             </thead>
//             <tbody>
//               {applicants.map(applicant => (
//                 <tr key={applicant.id}>
//                   <td>{applicant.id}</td>
//                   <td>{applicant.fullName}</td>
//                   <td>{applicant.email}</td>
//                   <td><a href={applicant.resume} target="\resume" rel="noopener noreferrer">View Resume</a></td>
//                   <td>{applicant.appliedPosition}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default JobApplicationForm;




// import React, { useState } from 'react';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';

// const RecruitmentApplicationForm = () => {
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

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Submit formData to server or handle form submission logic here
//     console.log(formData);
//     // Reset form fields after submission
//     setFormData({
//       companyName: '',
//       jobTitle: '',
//       numberOfVacancies: '',
//       jobLocation: '',
//       message: ''
//     });
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
//             <Form onSubmit={handleSubmit}>
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

//               <Button variant="primary ms-5 mt-2" type="submit">
//                 Submit Application
//               </Button>
//             </Form>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default RecruitmentApplicationForm;




// import React, { useState } from 'react';
// import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

// const viewApplication = () => {
//   const [formData, setFormData] = useState({
//     companyName: '',
//     jobTitle: '',
//     numberOfVacancies: '',
//     jobLocation: '',
//     message: ''
//   });

//   const [applications, setApplications] = useState([]);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Add the submitted application data to the applications array
//     setApplications(prevApplications => [...prevApplications, formData]);
//     // Reset form fields after submission
//     setFormData({
//       companyName: '',
//       jobTitle: '',
//       numberOfVacancies: '',
//       jobLocation: '',
//       message: ''
//     });
//   };

//   return (
//     <div className='bg-info'>   
//       <Container className="mt-5 bg-light border border-light">
//         <Row>
//           <Col>
//             <h1 className='text-center'>Company Recruitment Application</h1>
//           </Col>
//         </Row>
//         <Row className="mt-3">
//           <Col>
//             <Form onSubmit={handleSubmit}>
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
//                 <Form.Label>Message</Form.Label>
//                 <Form.Control
//                   as="textarea"
//                   rows={5}
//                   placeholder="Write your message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                 />
//               </Form.Group>

//               <Button variant="primary" type="submit">
//                 Submit Application
//               </Button>
//             </Form>
//           </Col>
//         </Row>
//       </Container>

//       <Container className="mt-5">
//         <Row>
//           {applications.map((application, index) => (
//             <Col key={index} xs={12} md={6} lg={4} className="mb-3">
//               <Card>
//                 <Card.Body>
//                   <Card.Title>{application.companyName}</Card.Title>
//                   <Card.Subtitle className="mb-2 text-muted">{application.jobTitle}</Card.Subtitle>
//                   <Card.Text>
//                     <strong>Number of Vacancies:</strong> {application.numberOfVacancies}<br />
//                     <strong>Job Location:</strong> {application.jobLocation}<br />
//                     <strong>Message:</strong> {application.message}
//                   </Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default viewApplication;



// import React, { useState } from 'react';
// // import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
// import { Card,Container, Row, Col} from 'react-bootstrap';


// const Viewjob = () => {
// //   const [formData, setFormData] = useState({
// //     companyName: '',
// //     jobTitle: '',
// //     numberOfVacancies: '',
// //     jobLocation: '',
// //     message: ''
// //   });

//   const [applications] = useState([]);

// //   const handleChange = (event) => {
// //     const { name, value } = event.target;
// //     setFormData(prevState => ({
// //       ...prevState,
// //       [name]: value
// //     }));
// //   };

// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     // Add the submitted application data to the applications array
// //     setApplications(prevApplications => [...prevApplications, formData]);
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
//     // <div className='bg-info'>   
//     //   <Container className="mt-5 bg-light border border-light">
//     //     <Row>
//     //       <Col>
//     //         <h1 className='text-center'>Company Recruitment Application</h1>
//     //       </Col>
//     //     </Row>
//     //     <Row className="mt-3">
//     //       <Col>
//     //         <Form onSubmit={handleSubmit}>
//     //           <Form.Group controlId="formCompanyName">
//     //             <Form.Label>Company Name</Form.Label>
//     //             <Form.Control
//     //               type="text"
//     //               placeholder="Enter company name"
//     //               name="companyName"
//     //               value={formData.companyName}
//     //               onChange={handleChange}
//     //               required
//     //             />
//     //           </Form.Group>

//     //           <Form.Group controlId="formJobTitle">
//     //             <Form.Label>Job Title</Form.Label>
//     //             <Form.Control
//     //               type="text"
//     //               placeholder="Enter job title"
//     //               name="jobTitle"
//     //               value={formData.jobTitle}
//     //               onChange={handleChange}
//     //               required
//     //             />
//     //           </Form.Group>

//     //           <Form.Group controlId="formNumberOfVacancies">
//     //             <Form.Label>Number of Vacancies</Form.Label>
//     //             <Form.Control
//     //               type="number"
//     //               placeholder="Enter number of vacancies"
//     //               name="numberOfVacancies"
//     //               value={formData.numberOfVacancies}
//     //               onChange={handleChange}
//     //               required
//     //             />
//     //           </Form.Group>

//     //           <Form.Group controlId="formJobLocation">
//     //             <Form.Label>Job Location</Form.Label>
//     //             <Form.Control
//     //               type="text"
//     //               placeholder="Enter job location"
//     //               name="jobLocation"
//     //               value={formData.jobLocation}
//     //               onChange={handleChange}
//     //               required
//     //             />
//     //           </Form.Group>

//     //           <Form.Group controlId="formMessage">
//     //             <Form.Label>Message</Form.Label>
//     //             <Form.Control
//     //               as="textarea"
//     //               rows={5}
//     //               placeholder="Write your message"
//     //               name="message"
//     //               value={formData.message}
//     //               onChange={handleChange}
//     //               required
//     //             />
//     //           </Form.Group>

//     //           <Button variant="primary" type="submit">
//     //             Submit Application
//     //           </Button>
//     //         </Form>
//     //       </Col>
//     //     </Row>
//     //   </Container>

//       <Container className="mt-5">
//         <Row>
//           {applications.map((application, index) => (
//             <Col key={index} xs={12} md={6} lg={4} className="mb-3">
//               <Card>
//                 <Card.Body>
//                   <Card.Title>{application.companyName}</Card.Title>
//                   <Card.Subtitle className="mb-2 text-muted">{application.jobTitle}</Card.Subtitle>
//                   <Card.Text>
//                     <strong>Number of Vacancies:</strong> {application.numberOfVacancies}<br />
//                     <strong>Job Location:</strong> {application.jobLocation}<br />
//                     <strong>Message:</strong> {application.message}
//                   </Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     // </div>
//   );
// }

// export default Viewjob;



import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

// const Viewjob = ({ applicationData }) => {
//   return (
//     // <div className='bg-info'>   
//       <Container className="mt-5 bg-light border border-info">
//         <Row>
//           <Col>
//             <h1 className='text-center'>Application Details</h1>
//           </Col>
//         </Row>
//         <Row className="mt-3">
//           <Col>
//             <p><strong>Company Name:</strong> {applicationData.companyName}</p>
//             <p><strong>Job Title:</strong> {applicationData.jobTitle}</p>
//             <p><strong>Number of Vacancies:</strong> {applicationData.numberOfVacancies}</p>
//             <p><strong>Job Location:</strong> {applicationData.jobLocation}</p>
//             <p><strong>Message:</strong> {applicationData.message}</p>
//           </Col>
//         </Row>
//         <div class="container bg-light">
//         <div class="col-md-12 text-center">
//             <button type="button" class="btn btn-success ms-2">Save</button>
//             <button type="button" class="btn btn-danger ms-2">Cancel</button>
//         </div>
//     </div>
//       </Container>
//     // </div>
//   );
// }



const ViewJob = ({ applicationData }) => {
  return (
    <Container className="mt-5 bg-light border border-info">
      <Row>
        <Col>
          <h1 className='text-center'>Application Details</h1>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <p className='text-center'><strong>Company Name:</strong> {applicationData.companyName}</p>
          <p className='text-center'><strong>Job Title:</strong> {applicationData.jobTitle}</p>
          <p className='text-center'><strong>Number of Vacancies:</strong> {applicationData.numberOfVacancies}</p >
          <p className='text-center'><strong>Job Location:</strong> {applicationData.jobLocation}</p>
          {/* <p><strong>Message:</strong> {applicationData.message}</p> */}
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="text-center">
          <Link to="/"><Button variant="success" className="ms-2">Save</Button></Link>
          <Link to="/"><Button variant="danger" className="ms-2">Cancel</Button></Link>
        </Col>
      </Row>
    </Container>
  );
}


export default ViewJob;
