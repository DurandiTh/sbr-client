
// //import React from 'react'
// //import { Link } from "react-router-dom";
// //import React, { useState } from 'react';
// import React, { useEffect, useState } from 'react'
// import axios from "axios";


// function AddStudent2() {

    
        

//           useEffect(() =>{
//             loadStudents();
//           }, [])
        
//           const loadStudents = async()=>{
//             const result = await axios.post(
//                 "http://localhost:8080/api/v1/student/saveUser");
//                 setStudents(result.data)
//           }

//           const handleInputChange = (e) => {
//                setStudents({...student,[e.target.name] : e.target.value});
//           }

          
             
//     return (
//          <div>
     
//      const[student, setStudents] = useState(
//                firstName : '',
//                lastName : '',
//                email : '',
//                department : '',
//            )
       
     
        
//          <form>
//      <label>First Name</label>
//       <input
//         type="text"
//         placeholder="FirstName"
//         name = "firstname"
//         value={firstname}
//         //onChange={(e) => setFirstName(e.target.value)}
//         onChange={(e) => handleInputChange(e)}
//       />
//      <br/>

//      <label>LastName</label>
//       <input
//         type="text"
//         placeholder="LastName"
//         name='lastname'
//         value={lastname}
//         //onChange={(e) => setLastName(e.target.value)}
//         onChange={(e) => handleInputChange(e)}
//       />
//       <br/>



//       <label>Email</label>
//       <input
//         type="email"
//         placeholder="Email"
//         name='email'
//         value={email}
//         //onChange={(e) => setEmail(e.target.value)}
//         onChange={(e) => handleInputChange(e)}

//       />
//       <br/>

//       <label>Department</label>
//       <input
//         type="text"
//         placeholder="department"
//         name='department'
//         value={department}
//         onChange={(e) => setDepartment(e.target.value)}
//       />
//       <br/>

    
//       <button type="submit">Submit</button>
//     </form>



//         </div>
//      );
// };

// export default AddStudent2;
import React, { useEffect, useState } from 'react';
import axios from "axios";
import {
	Link,
	useNavigate,
    
} from "react-router-dom";
import "./add.css"

function AddStudent2() {
     let navigate = useNavigate();
    const [student, setStudents] = useState({
        firstName: '',
        lastName: '',
        email: '',
        department: '',
    });



    const handleInputChange = (e) => {
        setStudents({ ...student, [e.target.name]: e.target.value });
    };

    const saveStudent = async (e) => {
     e.preventDefault();
     await axios.post(
          "http://localhost:8080/api/v1/student/saveUser",
          student
     );
     navigate("/view-students");
};

    return (
         <div className='form1'>
        
            <form onSubmit={(e)=> saveStudent(e)}>

        <div>       
         <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    placeholder="FirstName"
                    name="firstName"
                    //value={student.firstName}
                    id="firstName"
					required
					value={student.firstName}
                    onChange={(e) => handleInputChange(e)}
                />
                
         </div>
         <br/>

         <div>

                <label>Last Name</label>
                <input
                    type="text"
                    placeholder="LastName"
                    name='lastName'
                    value={student.lastName}
                    onChange={(e) => handleInputChange(e)}
                />
                
            </div>
            <br/>

             <div>
                <label>Email</label>
                <input
                    type="emal"
                    placeholder="Email"
                    name='email'
                    value={student.email}
                    onChange={(e) => handleInputChange(e)}
                />
            </div>
                <br />

                <div>
                <label>Department</label>
                <input
                    type="text"
                    placeholder="department"
                    name='department'
                    value={student.department}
                    onChange={(e) => handleInputChange(e)}
                />
                </div>

                <br />


              {/* startnow */}
					<div className="col-sm-2">
						<button
							type="submit"
							className="btn btn-outline-success btn-lg"
                            style={{float:"left"}}
                            >
							Save
						</button>
					</div>
                
                <div className="col-sm-2">
						<Link
							to={"/view-students"}
							type="submit"
							className="btn btn-outline-warning btn-lg"
                            
                            >
							Cancel
						</Link>
					</div>


                    {/* end now */}
                    



            </form>

           

            
        </div>
    );
};

export default AddStudent2;
