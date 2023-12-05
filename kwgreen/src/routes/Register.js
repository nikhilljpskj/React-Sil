import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Register = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    avatar: '',
    type: '',
  });

  const navigate = useNavigate(); // Create a navigate function

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/reg', formData);
      console.log(response.data);

      // If registration is successful, navigate to "/home"
      navigate('/');
    } catch (error) {
      console.error(error.response.data);
    }
  };


  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" name="firstname" onChange={handleChange} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" name="lastname" onChange={handleChange} />
        </label>
        <br />
        <label>
          Username:
          <input type="text" name="username" onChange={handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" onChange={handleChange} />
        </label>
        <br />
        <label>
          Avatar:
          <input type="text" name="avatar" onChange={handleChange} />
        </label>
        <br />
        <label>
          Type:
          <input type="text" name="type" onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
