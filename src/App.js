// import logo from './logo.svg';
import React from 'react';
import  Routing from '../src/Routing/routing';
import './App.css';

function App() {
  return (
    <div>
      <Routing/>
    </div>
  );
}

export default App;



// App.js

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('/api/data');
//       setData(response.data);
//     } catch (error) {
//       console.error('Error fetching data: ' + error);
//     }
//   };

//   return (
//     <div>
//       <h1>Data from MySQL Database</h1>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/data');
//       setData(response.data);
//     } catch (error) {
//       setError(error.message || 'An error occurred while fetching data.');
//     }
//   };

//   return (
//     <div>
//       <h1>Data from MySQL Database</h1>
//       {error ? (
//         <p>Error: {error}</p>
//       ) : (
//         <ul>
//           {data.map((item) => (
//             <li key={item.id}>{item.name}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default App;
