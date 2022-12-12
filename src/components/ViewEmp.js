import React from 'react'
import { useLocation } from 'react-router-dom';
import Header from './Header';

const ViewEmp = () => {
  const location = useLocation();
  const content = location.state;
  return (
    <>
      <Header />
      <div className="context">
        <div className="center-content">
          <div className="heading">
            <h3>View Details</h3>
          </div>
          <div className="details">
            <div style={{ textAlign: 'left', marginLeft: '57px' }} className="Label">
              <label htmlFor="name">Name</label><br />
            </div>
            <input className='Inputs' type="text" placeholder='Enter your Name' value={content.Name} disabled />
            <br />

            <div style={{ textAlign: 'left', marginLeft: '57px' }} className="Label">
              <label htmlFor="name">Course</label><br />
            </div>
            <input className='Inputs' type="text" placeholder='Enter your Course' value={content.Course} disabled />
            <br />

            <div style={{ textAlign: 'left', marginLeft: '57px' }} className="Label">
              <label htmlFor="name">Age</label><br />
            </div>
            <input className='Inputs' type="text" placeholder='Enter your Age' value={content.Age} disabled />
            <br />

            <div style={{ textAlign: 'left', marginLeft: '57px' }} className="Label">
              <label htmlFor="name">Email</label><br />
            </div>
            <input className='Inputs' type="text" placeholder='Enter your Email' value={content.Email} disabled />
            <br />

          </div>
        </div>

      </div>
    </>
  )
}

export default ViewEmp
