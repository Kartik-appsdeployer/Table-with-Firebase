import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Main.css'
import Header from './Header';
import { db } from '../firebase';
import { ref, onValue } from "firebase/database";
// import { toast } from 'react-toastify';

const Main = () => {

  const [data1, setData1] = useState([])
  // let Keys = []
  const [mykey, setMyKey] = useState([]);

  useEffect(() => {
    const dbRef = ref(db, 'EMP');
    onValue(dbRef, (snapshot) => {
      let myData = [];
      let Keys = [];
      snapshot.forEach(childSnapshot => {
        let Key = childSnapshot.key
        let Data = childSnapshot.val();
        myData.push(Data);
        Keys.push(Key);
      });

      setData1(myData);
      setMyKey(Keys);
      // console.log(data1);
      // console.log(Keys);
    });
  }, []);

  return (
    <>
      <Header/>
      <div style={{ marginTop: "100px" }}>
        <table>

          <tr>
            <th>S NO</th>
            <th>Name</th>
            <th>Course</th>
            <th>Age </th>
            <th>Email</th>
            <th>Actions</th>
          </tr>

          {
            data1.map((object, index) => (
              <tr>
                <th scope='row'>{index + 1}</th>
                <td>{object.Name}</td>
                <td>{object.Course}</td>
                <td>{object.Age}</td>
                <td>{object.Email}</td>
                <div className="myLinks">
                  <div className="link1">
                    <td><Link className='myLink1' to={`/view/${mykey[index]}`} state={object}>View</Link></td>
                  </div>
                  <div className="link2">
                    <td><Link className='myLink1' to={`/edit/${mykey[index]}`} state={{object:object, id: mykey[index]}}>Edit</Link></td>
                  </div>
                </div>
              </tr>
            ))
          }

        </table>
      </div>
    </>
  )
}

export default Main
