import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";


const Dashboard = () => {

    

  return (
    <header className="sidebar ">
            <div className='sidebar-design'>
                <div className='siebar-button'>
                    <Link to='/create' className="sidebar-button-link" >Create Student</Link>
                </div>
                <div  className='siebar-button'>
                <Link to="/show" className="sidebar-button-link">Student List</Link>
                </div>
            </div>
    </header>
  )
}

export default Dashboard