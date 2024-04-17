// function StudentProfile() {
//     return (  
//         <div>
            
//         </div>
//     );
// }

// export default StudentProfile;


//111start
// import React, {
// 	useEffect,
// 	useState,
// } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const StudentProfile = () => {
// 	const { id } = useParams();

// 	const [student, setStudent] = useState({
// 		firstName: "",
// 		lastName: "",
// 		email: "",
// 		department: "",
// 	});

// 	// useEffect(() => {
// 	// 	loadStudent();
// 	// }, []);

// 	// const loadStudent = async () => {
// 	// 	const result = await axios.get(
// 	// 		`http://localhost:8080/api/v1/student/getstudent/${id}`
// 	// 	);
// 	// 	setStudent(result.data);
// 	// };

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 // Fetch data from the API
//                 const response = await axios.get('http://localhost:8080/api/v1/student/getUser/${id}');
//                 // Set the response data to the state
//                 setStudent(response.data);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         // Call the fetchData function when the component mounts
//         fetchData();
//     }, [id]); // Empty dependency array ensures this effect runs only once, when the component mounts

// 	return (
// 		<section
// 			className="shadow"
// 			style={{ backgroundColor: "whitesmoke" }}>
// 			<div className="container py-5">
// 				<div className="row">
// 					<div className="col-lg-3">
// 						<div className="card mb-4">
// 							<div className="card-body text-center">
// 								<img
// 									src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
// 									alt="avatar"
// 									className="rounded-circle img-fluid"
// 									style={{ width: 150 }}
// 								/>
// 								<h5 className="my-3">
// 									{`${student.firstName} ${student.lastName}`}
// 								</h5>
// 								<div className="d-flex justify-content-center mb-2">
// 									<button
// 										type="button"
// 										className="btn btn-outline-primary">
// 										Call
// 									</button>
// 									<button
// 										type="button"
// 										className="btn btn-outline-warning ms-1">
// 										Message
// 									</button>
// 								</div>
// 							</div>
// 						</div>
// 					</div>

// 					<div className="col-lg-9">
// 						<div className="card mb-4">
// 							<div className="card-body">
// 								<hr />

// 								<div className="row">
// 									<div className="col-sm-3">
// 										<h5 className="mb-0">
// 											First Name
// 										</h5>
// 									</div>

// 									<div className="col-sm-9">
// 										<p className="text-muted mb-0">
// 											{student.firstName}
// 										</p>
// 									</div>
// 								</div>

// 								<hr />

// 								<div className="row">
// 									<div className="col-sm-3">
// 										<h5 className="mb-0">
// 											Last Name
// 										</h5>
// 									</div>

// 									<div className="col-sm-9">
// 										<p className="text-muted mb-0">
// 											{student.lastName}
// 										</p>
// 									</div>
// 								</div>
// 								<hr />

// 								<div className="row">
// 									<div className="col-sm-3">
// 										<h5 className="mb-0">
// 											Email
// 										</h5>
// 									</div>

// 									<div className="col-sm-9">
// 										<p className="text-muted mb-0">
// 											{student.email}
// 										</p>
// 									</div>
// 								</div>
// 								<hr />

// 								<div className="row">
// 									<div className="col-sm-3">
// 										<h5 className="mb-0">
// 											Department
// 										</h5>
// 									</div>

// 									<div className="col-sm-9">
// 										<p className="text-muted mb-0">
// 											{student.department}
// 										</p>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default StudentProfile;
//111end

// StudentProfile.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const StudentProfile = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });

//   useEffect(() => {
//     const loadStudent = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8080/api/v1/student/getstudent/${id}`);
//         setStudent(response.data);
//       } catch (error) {
//         console.error("Error loading student:", error);
//       }
//     };

//     loadStudent();
//   }, [id]);
useEffect(() => {
	loadStudent();
}, []);

const loadStudent = async () => {
	const result = await axios.get(
		`http://localhost:8080/api/v1/student/getUser/${id}`
	);
	setStudent(result.data);
};

  return (
    <section className="shadow" style={{ backgroundColor: "whitesmoke" }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-3">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle img-fluid"
                  style={{ width: 150 }}
                />
                <h5 className="my-3">{`${student.firstName} ${student.lastName}`}</h5>
                <div className="d-flex justify-content-center mb-2">
                  <button type="button" className="btn btn-outline-primary">Call</button>
                  <button type="button" className="btn btn-outline-warning ms-1">Message</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-9">
            <div className="card mb-4">
              <div className="card-body">
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">First Name</h5>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{student.firstName}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Last Name</h5>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{student.lastName}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Email</h5>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{student.email}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Department</h5>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{student.department}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentProfile;
