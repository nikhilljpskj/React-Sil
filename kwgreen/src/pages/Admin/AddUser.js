
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./AddUser.css"

const AddUser = () => {
  const [userData, setUserData] = useState({
    name: '',
    gender: '',
    dob: '',
    address: '',
    mob: '',
    email: '',
    district: '',
    block: '',
    cardno: '',
    panchayat: '',
  });

  const navigate = useNavigate(); // Create a navigate function

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/adduser', userData);
      console.log(response.data);

      // If user addition is successful, navigate to "/adduser"
      navigate('/home');
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <br />
        <label>
          Gender:
          <input type="text" name="gender" onChange={handleChange} />
        </label>
        <br />
        <label>
          Date of Birth:
          <input type="date" name="dob" onChange={handleChange} />
        </label>
        <br />
        <label>
          Address:
          <input type="text" name="address" onChange={handleChange} />
        </label>
        <br />
        <label>
          Mobile:
          <input type="text" name="mobile" onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="text" name="email" onChange={handleChange} />
        </label>
        <br />
        <label>
          District:
          <input type="text" name="district" onChange={handleChange} />
        </label>
        <br />
        <label>
          Block:
          <input type="text" name="block" onChange={handleChange} />
        </label>
        <br />
        <label>
          Card Number:
          <input type="text" name="cardno" onChange={handleChange} />
        </label>
        <br />
        <label>
          Panchayat:
          <input type="text" name="panchayat" onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
