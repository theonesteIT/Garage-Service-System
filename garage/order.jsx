import React,{useState} from "react";
import './style.css'
import logo2 from './image/logo2.png'
import axios from "axios";
import {useNavigate} from 'react-router-dom';
function Order(){
    const navigate=useNavigate();
//set useState hooks
const [formData,setFormData]=useState({
    name:'',
    address:'',
    phone:'',
     service:'',
    date:''
   
});
const [message,setMessage]=useState('');

// handle change

function handleChange(e){
    const {name,value}=e.target;
    setFormData({
...formData,
        [name]:value
    });
};

// handle submit

function handleSubmit(event){
    event.preventDefault();

// starting use axios for post method

axios.post('http://localhost:3000/order',formData)
.then((response)=>{
setMessage(response.data.message);
alert('Data inserted');

setFormData({
    name:'',
    address:'',
    phone:'',
     service:'',
    date:''
});
navigate('/');
})
.catch((error)=>{
    console.log('Failed to send data',error)
})

}


    return(
        <div className="parent">

            <div className="offerForm">
                <img src={logo2} alt="" />
                <h2>Offer Form</h2>
                <div className="formDetail">
              
                <form onSubmit={handleSubmit}>
                    <label>Enter your names:</label> <br />
                    <input type="text" name="name" value={formData.name}  onChange={handleChange} required /> <br />
                    <label>Enter your address:</label> <br />
                    <input type="text" name="address" value={formData.address} onChange={handleChange} required  /> <br />
                    <label>Enter your Phone:</label> <br />
                    <input type="text" name="phone"  value={formData.phone} onChange={handleChange} required /> <br />
                    <label>Enter your Service:</label> <br />
                    <input type="text" name="service"  value={formData.service} onChange={handleChange} required /> <br />
                    <label>Enter your date:</label> <br />
                    <input type="date" name="date"  value={formData.date} onChange={handleChange} required /> <br />
                    <button type="submit">Send</button>
                </form>
                {message && <p>{message}</p>}
                </div>
                
            </div>
        </div>
    )
}

export default Order;