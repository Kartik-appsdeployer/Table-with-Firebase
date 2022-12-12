import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { db } from '../firebase';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import { toast } from 'react-toastify';
import { getDatabase, ref, set } from "firebase/database";
import './AddEmp.css';

const initialState = {
  Name: '',
  Course: '',
  Age: '',
  Email: ''
};

const AddEmp = () => {

  const location = useLocation();
  const content = location.state;


  const uuid = uuidv4();

  const navigate = useNavigate();

  const [state, setState] = useState(initialState);

  const { Name, Course, Email, Age } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(state)

    set(ref(db, 'EMP/' + uuid), state).then(() => {
      toast.success("Employees details added Successfully")
      navigate('/');
    })
  }
  return (
    <>
      <Header />
      <div className="context">
        <div className="center-content">
          <div className="heading">
            <h3>Add Employee</h3>
          </div>
          <div className="details">
            <div style={{ textAlign: 'left', marginLeft: '57px' }} className="Label">
              <label htmlFor="name">Name</label><br />
            </div>
            <input className='Inputs' type="text" placeholder='Enter your Name' onChange={(e) => setState((prev) => ({ ...prev, Name: e.target.value }))} />
            <br />

            <div style={{ textAlign: 'left', marginLeft: '57px' }} className="Label">
              <label htmlFor="name">Course</label><br />
            </div>
            <input className='Inputs' type="text" placeholder='Enter your Course' onChange={(e) => setState((prev) => ({ ...prev, Course: e.target.value }))} />
            <br />

            <div style={{ textAlign: 'left', marginLeft: '57px' }} className="Label">
              <label htmlFor="name">Age</label><br />
            </div>
            <input className='Inputs' type="text" placeholder='Enter your Age' onChange={(e) => setState((prev) => ({ ...prev, Age: e.target.value }))} />
            <br />

            <div style={{ textAlign: 'left', marginLeft: '57px' }} className="Label">
              <label htmlFor="name">Email</label><br />
            </div>
            <input className='Inputs' type="text" placeholder='Enter your Email' onChange={(e) => setState((prev) => ({ ...prev, Email: e.target.value }))} />
            <br />

            <div className="Button">
              <button onClick={handleSubmit} className='add-btn'>Add Employee</button>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default AddEmp
