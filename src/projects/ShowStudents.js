
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"

const ShowStudents = () => {
    const style = {
        width: "18rem",
    }
    const [students,setStudents] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
    const getStudents = async () => {
        const response = await axios.get('http://localhost:7070/api/v1/show')
        const data = await response.data;
        setStudents(data);
        setLoading(false);
    }
    getStudents()
    })

     const deleteProject = async (e) => {
        console.log(e.target.id)
        const response = await axios.delete(`http://localhost:7070/api/v1/delete/${e.target.id}`)
        alert("the student was successfully deleted")
        

     }
  return (
    <div className=" align-left">
        <div className="row">
            {loading ? "WATING" : students.map((student) => (
                
                 <div className="col-md-4">
                    <div className="card mb-4" style={style}>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Student details</li>
                        <li className="list-group-item">First Name:   {student.firstName} </li>
                        <li className="list-group-item">Last Name:    {student.lastName} </li>
                        <li className="list-group-item">Teacher Name: {student.teacher} </li>
                        <li className="list-group-item">DOB:          {student.DOB} </li>
                        <li className="list-group-item">Apply Date:   {student.applydate} </li>
                    </ul>
                    <div className="card-body" >
                         <Link  to={`/update/${student.id}`}  data={student.id} id={student.id} class="card-link btn btn-primary">Edit</Link>
                    <button onClick={deleteProject} id={student.id} className="btn btn-card-link btn-warning">Delete</button>
                    </div>
                    </div>
                    

                 </div>
            ))}
           
        </div>
    </div>
  )

            }
export default ShowStudents