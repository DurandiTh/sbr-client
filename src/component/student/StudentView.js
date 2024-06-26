//1 start

// import React, { useEffect, useState } from 'react'
// import axios from "axios";
// import {FaEdit,FaEye,FaTrashAlt} from "react-icons/fa";
// import { Link } from "react-router-dom";


// const StudentView = () => {

//   const[students,setStudents] = useState([]);

//   useEffect(() =>{
//     loadStudents();
//   }, [])

//   const loadStudents = async()=>{
//     const result = await axios.get(
//         "http://localhost:8080/api/v1/student/getUser");
//         setStudents(result.data)
//   }

  
//   const handleDelete = async (id) => {
// 		await axios.delete(
// 			`http://localhost:8080/api/v1/student/delete/${id}`
// 		);
// 		loadStudents();
// 	};
//   return (
//     <section>
//       <table className='table table-bordered table-hover shadow '>
//         <thead>
//            <tr className='text-center'>
//              <th>ID</th>
//              <th>First Name</th>
//              <th>Last Name</th>
//              <th>Email</th>
//              <th>Department</th>
//              <th colSpan="3">Actions</th>
//            </tr>
//         </thead>
//         <tbody className='text-center'>
//             {students.map((student, index)=>(
//                 <tr key={student.id}>
//                     <td scope="row" key={index}>
//                         {index + 1}
//                     </td>
//                    <td>{student.firstName}</td>
//                    <td>{student.lastName}</td>
//                    <td>{student.email}</td>
//                    <td>{student.department}</td>
//                    <td className='mx-2'>
//                    <Link to={'/student-profile/${student.id}'}
//                      className='btn btn-info'>
//                      <FaEye/>
//                      </Link>
//                     </td>
//                    <td className='mx-2'>
//                      <Link to={'/edit-student/${student.id}'}
//                      className='btn btn-warning'>
//                      <FaEdit/>
//                      </Link>
//                     </td>
//                    <td className='mx-2'>
//                    <button
//                      className='btn btn-warning'
//                       onClick={() =>
// 											handleDelete(student.id)
// 										 }> 
//                     <FaTrashAlt/>
//                      </button>
//                     </td>
//                  </tr>

//             ))}
           
//         </tbody>
//       </table>
//     </section>
//   );
// };

// export default StudentView;
// //1 end




import React, { useEffect, useState } from 'react';
import axios from "axios";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from '../common/Search';

const StudentView = () => {
  const [students, setStudents] = useState([]);
  const[search,setSearch] = useState("");

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    try {
      const result = await axios.get("http://localhost:8080/api/v1/student/getUser");
      setStudents(result.data);
    } catch (error) {
      console.error("Error loading students:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/student/delete/${id}`);
      loadStudents();
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  return (
    <section>
      <Search
        search={search}
        setSearch={setSearch}
      />
      <table className='table table-bordered table-hover shadow'>
        <thead>
          <tr className='text-center'>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
            <th colSpan="3">Actions</th>
          </tr>
        </thead>
        <tbody className='text-center'>
         {students
         
         .filter((st) =>
							st.firstName
								.toLowerCase()
								.includes(search)
						)
         
         
         .map((student, index) => (
            <tr key={student.id}>
              <td scope="row">{index + 1}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.email}</td>
              <td>{student.department}</td>
              <td className='mx-2'>
                <Link to={`/student-profile/${student.id}`} className='btn btn-info'><FaEye /></Link>
              </td>
              <td className='mx-2'>
                <Link to={`/edit-student/${student.id}`} className='btn btn-warning'><FaEdit /></Link>
              </td>
              <td className='mx-2'>
                <button className='btn btn-warning' onClick={() => handleDelete(student.id)}><FaTrashAlt /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default StudentView;
