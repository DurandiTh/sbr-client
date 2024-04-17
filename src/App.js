
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "/node_modules/bootstrap/dist/js/bootstrap.min.js"
import './App.css';
import Home from './Home';
import StudentView from './component/student/StudentView';
import NavBar from "./component/common/NavBar";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import AddStudent2 from "./component/student/AddStudent2";
import EditStudent from "./component/student/EditStudent"
import EditStudent2 from "./component/student/EditStudent2"
import StudentPofile from "./component/student/StudentProfile";

function App() {
  return (
    <main className="container mt-5">
    {/* <Router> */}
    <NavBar/>
    {/* <main/> */}
    {/* <div style={{display: 'flex',direction:'column',alignItems:'center' ,height: '3rem'}}>
    <h1>welcome</h1>
    </div> */}
    
<Routes>
  <Route 
  exact 
  path="/" 
  element={<Home/>}>
  </Route>
  <Route 
  exact 
  path="/view-students" 
  element={<StudentView/>}>
  </Route>
  <Route 
  exact 
  path="/add-students" 
  element={<AddStudent2/>}>
  </Route>

  {/* <Route 
  exact 
  path="/edit-student/:id" 
  element={<EditStudent/>}>
  </Route> */}

  <Route 
  exact 
  path="/edit-student/:id" 
  element={<EditStudent2/>}>
  </Route>

  <Route 
  exact 
  path="/student-profile/:id" 
  element={<StudentPofile/>}>
  </Route>
 </Routes>
{/* </Router> */}
    </main>
  );
}

export default App;
