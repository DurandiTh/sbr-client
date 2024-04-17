

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

    
//              useEffect(() => {
//                 const loadStudent = async () => {
//                     try {
//                         const response = await axios.get(`http://localhost:8080/api/v1/student/getstudent/${id}`);
//                         setStudent(response.data);
//                     } catch (error) {
//                         console.error("Error loading student:", error);
//                     }
//                 };
            
//                 loadStudent();
//             }, [id]); // Include id in the dependency array
            
    
   




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
// //1 end

import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./EditStudent.css"

const EditStudent2 = () => {
    let navigate = useNavigate();
    const { id } = useParams(); 
    
    const [student, setStudent] = useState({
        firstName: '',
        lastName: '',
        email: '',
        department: '',
    });

    const { firstName, lastName, email, department } = student;

    useEffect(() => {
        const loadStudent = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/student/getUser/${id}`);
                setStudent(response.data);
            } catch (error) {
                console.error("Error loading student:", error);
            }
        };

        loadStudent();
    }, [id]); // Include id in the dependency array

    const handleInputChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const updateStudent = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8080/api/v1/student/updateUser/${id}`, student);
            navigate("/view-students", { state: { updatedStudent: student } });
        } catch (error) {
            console.error("Error updating student:", error);
        }
    };

    return (
        <div className="col-sm-8 py-2 px-5 offset-2 shadow">
            <h2 className="mt-5">Edit Student</h2>
            <form onSubmit={(e) => updateStudent(e)}>
                <div className="input-group mb-5">
                    <label className="input-group-text" htmlFor="firstName">First Name</label>
                    <input
                        className="form-control col-sm-6"
                        type="text"
                        placeholder="FirstName"
                        name="firstName"
                        id="firstName"
                        required
                        value={firstName}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                <div className="input-group mb-5">
                    <label className="input-group-text" htmlFor="lastName" >Last Name</label>
                    <input
                         className="form-control col-sm-6"
                        type="text"
                        placeholder="LastName"
                        name='lastName'
                        value={lastName}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                <div className="input-group mb-5">
                    <label className="input-group-text" htmlFor="email" style={{width:100}}>Email</label>
                    <input
                        className="form-control col-sm-6"
                        type="email"
                        placeholder="Email"
                        name='email'
                        value={email}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                <div className="input-group mb-5">
                    <label className="input-group-text" htmlFor="email" style={{width:100}}>Department</label>
                    <input
                        className="form-control col-sm-6"
                        type="text"
                        placeholder="department"
                        name='department'
                        value={department}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                <div>
                {/* <div className="col-sm-2">
                    <button style={{marginRight:10}}
                        type="submit"
                        className="btn btn-outline-success btn-lg">
                        Save
                    </button>
                </div>
                <div style={{marginLeft:10}} className="col-sm-2">
                    <Link
                        to={"/view-students"}
                        type="submit"
                        className="btn btn-outline-warning btn-lg">
                        Cancel
                    </Link>
                </div> */}



                <div className="col-sm-2">
                    <div className='buttons'>
                    <button style={{marginRight:10}}
                        type="submit"
                        className="btn btn-outline-success btn-lg">
                        Save
                    </button>

                
                    <button style={{marginRight:10}}
                        to={"/view-students"}
                        type="submit"
                        className="btn btn-outline-warning btn-lg">
                        Cancel
                    </button>
                    </div>
                </div>

                </div>
            </form>
        </div>
    );
}

export default EditStudent2;
