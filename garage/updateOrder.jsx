import React, { useState , useEffect } from "react";
import './style.css';
import logo2 from './image/logo2.png';
import axios from "axios";
import {useParams, useNavigate } from 'react-router-dom';

function UpdateOrder() {
  const navigate = useNavigate();
const {id}=useParams();
  // Set useState hooks
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    service: '',
    date: ''
  });
  const [message, setMessage] = useState('');
const [error,setError]=useState('');

// fetch order by id

useEffect(()=>{
  axios.get(`http://localhost:3000/order/${id}`)
  .then((response)=>{
    setFormData(response.data); 
  })
  .catch((err)=>{
    console.log(err)
  })
},[id]); // Dependency array ensures the fetch happens only once when `id` changes
  

  // Handle input change
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();

    // Use axios for the POST request
    axios.put(`http://localhost:3000/orderUpdate/${id}`, formData)
      .then((response) => {
        setMessage(response.data.message);
        alert('Data updated successfully');

        // Reset form data
        setFormData({
          name: '',
          address: '',
          phone: '',
          service: '',
          date: ''
        });

        // Navigate to dashboard
        navigate('/dashboard');
      })
      .catch((error) => {
        console.error('Failed to send data:', error);
        setError('Failed to update data. Please try again.');
      });
  }

  return (
    <div className="parent">
      <div className="offerForm">
        <img src={logo2} alt="" />
        <h2>Update Order Form</h2>
        {error && <p>Error for fetching data</p>}
        <div className="formDetail">
          <form onSubmit={handleSubmit}>
            <label>Enter your name:</label> <br />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            /> <br />
            <label>Enter your address:</label> <br />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            /> <br />
            <label>Enter your phone:</label> <br />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            /> <br />
            <label>Enter your service:</label> <br />
            <input
              type="text"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            /> <br />
            <label>Enter your date:</label> <br />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            /> <br />
            <button type="submit">Update</button>
          </form>
          {message && <p>{message}</p>}
        </div>
      </div>
    </div>
  );
}

export default UpdateOrder;
