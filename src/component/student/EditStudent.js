// import React, { useEffect, useState } from 'react';
// import axios from "axios";
// import { Link, useNavigate, useParams } from "react-router-dom";

// const EditStudent2 = () => {
//     let navigate = useNavigate();
//     const { id } = useParams(); 
    

//     const [student, setStudent] = useState({
        
//         firstName: '',
//         lastName: '',
//         email: '',
//         department: '',
//     });


//     const {
                
//          		firstName,
//          		lastName,
//          		email,
//          		department,
//          	} = student

    

    
//     useEffect(() => {
//         const loadStudents = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8080/api/v1/student/getstudent/${id}`);
//                 setStudent(response.data);
//             } catch (error) {
//                 console.error("Error loading student:", error);
//             }
//         };
    
//         loadStudents();
//     }, []); // Include id in the dependency array
    




//     const handleInputChange = (e) => {
//         setStudent({ ...student, [e.target.name]: e.target.value, });
//     };

//     const updateStudent = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.put(`http://localhost:8080/api/v1/student/updateUser/${id}`, student);
//             navigate("/view-students", { state: { updatedStudent: student } });
//         } catch (error) {
//             console.error("Error updating student:", error);
//         }
//     };

//     return (
//         <div className="col-sm-8 py-2 px-5 offset-2 shadow">
//             <h2 className="mt-5">Edit Student</h2>
//             <form onSubmit={(e)=>updateStudent(e)}>
//              {/* <form onSubmit={(e)=> updateStudent(e)}> */}
//              <div className="input-group mb-5">
//                  <label  className="input-group-text" htmlFor="firstName">First Name</label>
//                  <input
//                     className="form-control col-sm-6"
//                      type="text"
//                      placeholder="FirstName"
//                      name="firstName"
//                      id="firstName"
// 				    required
//                     value={firstName}
//                   onChange={(e) => handleInputChange(e)}
//               />
//               </div>
               

//                 <div className="input-group mb-5">
//                <label>Last Name</label>
//                 <input
//                     type="text"
//                      placeholder="LastName"
//                     name='lastName'
//                     value={lastName}
//                     onChange={(e) => handleInputChange(e)}
//                 />
//                 </div>
            

//                <div className="input-group mb-5">
//                  <label>Email</label>
//                  <input
//                     type="email"
//                      placeholder="Email"
//                     name='email'
//                      value={email}
//                     onChange={(e) => handleInputChange(e)}
//                  />
                 
//                  </div>

//                  <div className="input-group mb-5">
//                  <label>Department</label>
//                  <input
//                      type="text"
//                     placeholder="department"
//                   name='department'
//                      value={department}
//                      onChange={(e) => handleInputChange(e)}
//                  />
//                  </div>
               

              
// 					<div className="col-sm-2">
// 						<button
//                            // onClick={(e)=>updateStudent2(e)}
// 							type="submit"
// 							className="btn btn-outline-success btn-lg">
// 							Save
// 						</button>
// 				</div>
                
//                <div className="col-sm-2">
// 						<Link
// 							to={"/view-students"}
// 							type="submit"
// 						className="btn btn-outline-warning btn-lg">
// 							Cancel
// 						</Link>
//  					</div>
                
//            </form> 
            
//         </div>
//     );
// }

// export default EditStudent2;