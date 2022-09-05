import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AddStudent = () => {

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
        const newStudent = {
            firstName: state.firstName,
            lastName: state.lastName,
            DOB: state.DOB,
            teacher: state.teacher,
            applydate: state.applydate ,
            
        } 
            try {
                const response = await axios.post(' http://localhost:7070/api/v1/create', newStudent )
                console.log(response)
                
            } catch (error) {
                console.log(error)
            }
      }
      
        


       
  return (
    <div className="project">
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

export default AddStudent