import {React, useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
import { db } from '../firebase';
import { toast } from 'react-toastify';
import { child, get, ref, update } from "firebase/database";

const Edit = () => {
    
    const location = useLocation();
    const navigate = useNavigate();
    const content = location.state.object;
    const content1 = location.state.id;
    const initialState = {
        Name: content.Name,
        Course: content.Course,
        Age: content.Age,
        Email: content.Email
    };
    const [state, setState] = useState(initialState)
    const {Name, Course, Age, Email} = state;
    const handleSubmit = (e) => {
        e.preventDefault();
        const dbRef = ref(db);
        const address = "EMP/" + content1;

        get(child(dbRef, address)).then(snapshot => {
            if(snapshot.exists()){
                update(ref(db, address), state).then(() => {
                    toast.success("Updated successfully");
                    navigate('/');
                }).catch(() => {
                    toast.error("Some Error");
                })
            }
        })
        // console.log(state)
    }

    return (
        <>
            <Header />
            <div className="context">
                <div className="center-content">
                    <div className="heading">
                        <h3>Edit Details</h3>
                    </div>
                    <div className="details">
                        <div style={{ textAlign: 'left', marginLeft: '57px' }} className="Label">
                            <label htmlFor="name">Name</label><br />
                        </div>
                        <input className='Inputs' type="text" placeholder='Enter your Name' value={Name} onChange={(e) => setState((prev) => ({ ...prev, Name: e.target.value }))} />
                        <br />

                        <div style={{ textAlign: 'left', marginLeft: '57px' }} className="Label">
                            <label htmlFor="name">Course</label><br />
                        </div>
                        <input className='Inputs' type="text" placeholder='Enter your Course' value={Course} onChange={(e) => setState((prev) => ({ ...prev, Course: e.target.value }))}/>
                        <br />

                        <div style={{ textAlign: 'left', marginLeft: '57px' }} className="Label">
                            <label htmlFor="name">Age</label><br />
                        </div>
                        <input className='Inputs' type="text" placeholder='Enter your Age' value={Age}  onChange={(e) => setState((prev) => ({ ...prev, Age: e.target.value }))}/>
                        <br />

                        <div style={{ textAlign: 'left', marginLeft: '57px' }} className="Label">
                            <label htmlFor="name">Email</label><br />
                        </div>
                        <input className='Inputs' type="text" placeholder='Enter your Email' value={Email} onChange={(e) => setState((prev) => ({ ...prev, Email: e.target.value }))} />
                        <br />

                        <div className="Button">
                            <button onClick={handleSubmit} className='add-btn'>Save Details</button>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Edit
