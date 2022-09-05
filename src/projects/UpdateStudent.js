import axios from 'axios';
import React, { useState } from 'react'
import {useParams} from 'react-router'

const UpdateStudent = (props) => {
  const {id }= useParams()

  
 console.log(id)
  
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        DOB: '',
        teacher: '',
        applydate: '',

    })
    const onChange = (e) => {

        setState({ 
            ...state,
            [e.target.name]: e.target.value });
        
      }
    const onSubmit = async (e) => {
     
        e.preventDefault();
        const updateStudent = {
            firstName: state.firstName,
            lastName: state.lastName,
            DOB: state.DOB,
            teacher: state.teacher,
            applydate: state.applydate ,
            
        } 
            try {
                const response = await axios.patch(`http://localhost:7070/api/v1/update/${id}`, updateStudent )
                console.log(response)
                const url = "http://localhost:7070/api/v1/show"
                window.location.assign =  url     
            } catch (error) {
                console.log(error)
            }
      }
  return (
 <div className="update">
    <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto">
          <h5 className="display-4 text-center">
            Create new Student
          </h5>
          <hr />
          <form onSubmit={onSubmit} >
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control form-control-lg "
                placeholder="First Name"
                name="firstName"
                value={state.firstName}
                onChange={onChange}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Last Name"
                
                name="lastName"
                value={state.lastName}
                onChange={onChange}
              />
            </div>
            {/* <!-- disabled for Edit Only!! remove "disabled" for the Create operation --> */}
            <div className="form-group mb-2">
              <input
                className="form-control form-control-lg"
                placeholder="Teacher"
                name="teacher"
                value={state.teacher}
                onChange={onChange}
              />
            </div>
            <h6>Date of Birth</h6>
            <div className="form-group mb-2">
              <input
                type="date"
                className="form-control form-control-lg"
                name="DOB"
                value={state.DOB}
                onChange={onChange}
              />
            </div>
            <h6>ApplyDate</h6>
            <div className="form-group mb-2">
              <input
                type="date"
                className="form-control form-control-lg"
                name="applydate"
                value={state.applydate}
                onChange={onChange}
              />
            </div>

            <input
              type="submit"
              className="btn btn-primary btn-block mt-4"
            />
          </form>
        </div>
      </div>
    </div>
  </div>

    
  )
}

export default UpdateStudent