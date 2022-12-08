import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import db from '../firebase'
import { toast } from 'react-toastify';

const initialState = {
  Name: '',
  Course: '',
  Email: ''
};

const AddEditEmp = () => {
  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});
  const history = useNavigate();

  const {Name, Course, Email} = state;

  const handleChange = (e) => {
    const {name, value} = e.target;
    setState({...state, [name]:value});
  }
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    // db.child("Emp").push(state, (err)=>{
    //   if(err){
    //     toast.error(err);
    //   }
    //   else{
    //     toast.success("Your data is added successfully!!")
    //   }
    // });
    // setTimeout(() => history('/'), 500)

    console.log(state)
  }
  return (
    <div style={{marginTop: '100px'}}>
        <form style={{margin: 'auto', borderRadius: '20px', background: 'white', padding: '15px', maxWidth: '400px', alignContent: 'center'}} onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id='name' name='name' required value={Name} placeholder="Enter your name" onChange={(e) => handleChange(e)}/>
          <br />
          <label htmlFor="course">Course</label>
          <input type="text" id='course' name='course' required value={Course} placeholder="Enter your course" onChange={(e) => handleChange(e)}/>
          <br />
          <label htmlFor="email">Email</label>
          <input type="email" id='email' name='email' required value={Email} placeholder="Enter your email" onChange={(e) => handleChange(e)}/>
        
          <input type="submit" value= "Save"/>
        </form>
    </div>
  )
}

export default AddEditEmp
