import React, { useState } from "react";
import logo2 from './image/logo2.png'
import './style.css'
import {Link} from 'react-router-dom'
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard(){
const navigate=useNavigate();
// get records
const [users,setUsers]=useState([]);
const [error,setError] = useState('');

    axios.get('http://localhost:3000/getOrder')
.then((response)=>{
    setUsers(response.data);
})
.catch((err)=>{
    console.log('Failed to fetch data',err)
    setError('Failde to fetch data');
})


// delete records
function deleteOrder(userId){
axios.delete(`http://localhost:3000/deleteOrder/${userId}`)
.then(()=>{
   alert('Data Deleted')
})
.catch((err)=>{
    console.log(err)
})
}


 // Navigate to update component
 function handleUpdate(userId) {
    navigate(`/updateOrder/${userId}`);
  }
  return(
        <div>
             {/* start of header */}
        <div className="header">
        <div className="logo">
<img src={logo2} alt="" />
        </div>
        <div className="navbar">
          <h3>Welcome in Garage Service System</h3>
        </div>
        </div>
        {/* start of containerDashboard */}
        <div className="dashboardContainer">
            <div className="dashboardNav">
            <Link to='/dashboard'>
                <div className="nav">
                    Orders Lists
                </div>
                </Link>
                <Link to='/order'>
                <div className="nav">
                  Register
                </div>
                </Link>
                <Link to='/order'>
                <div className="nav">
                    Service Done
                </div>
                </Link>
                <Link to='/order'>
                <div className="nav">
                    Logout
                </div>
                </Link>

            </div>
            <div className="dashboardContent">
                <div className="dashboardContentHeader">
                    <h2>Order Lists / <span className="span">Admin</span></h2>
                </div>
                <div className="table">
                    <h3>Records of orders</h3>
                    <table border="1">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Names</th>
                  <th>Address</th>
                  <th>Phone</th>
                  <th>Service</th>
                  <th>Date</th>
                  <th colSpan={2}>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 ? (
                  users.map((user, index) => (
                    <tr key={user._id}>
                      <td>{index + 1}</td>
                      <td>{user.name}</td>
                      <td>{user.address}</td>
                      <td>{user.phone}</td>
                      <td>{user.service}</td>
                      <td>{user.date}</td>
                      <td><button className="delete" onClick={()=>deleteOrder(user._id)}>Delete</button></td>
                      <td><button className="update" onClick={()=>handleUpdate(user._id)}>Update</button></td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" style={{ textAlign: 'center' }}>
                      {error ? <p>{error}</p> : <p>No data found</p>}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
                </div>
            </div>
        </div>
        {/* footer start */}

<div className="footer">
  <div className="logo">
    <img src={logo2} alt="" />
  </div>
  <div className="contact">
    <h3>Contact us</h3>
    <p>+250798699601 <br /> +250798699601</p>
  </div>
</div>
        </div>
    )
}
export default Dashboard;