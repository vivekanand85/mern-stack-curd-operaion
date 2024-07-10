import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const initialUserState = {
  fname: "",
  lname: "",
  email: "",
  password: ""
};

const Add = () => {
  const [user, setUser] = useState(initialUserState);

  const inputHandler = (e) => {
  const { name, value } = e.target;
  setUser(prevUser => ({
    ...prevUser,
    [name]: value
  }));
};

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/create", user);
      toast.success(response.data.msg, { position: "top-right" });
      setUser(initialUserState); // Reset form fields after successful submission
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to add user. Please try again.', { position: "top-right" });
    }
  };

  return (
    <div className='addUser'>
      {/* <Link to={"/"}>Back</Link> */}
      <h3>Add new user</h3>
      <form className='addUserForm' onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="fname">First name</label>
          <input
            type="text"
            onChange={inputHandler}
            id="fname"
            name="fname"
            autoComplete='off'
            placeholder='First name'
            value={user.fname} // Controlled component: value from state
            required
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="lname">Last name</label>
          <input
            type="text"
            onChange={inputHandler}
            id="lname"
            name="lname"
            autoComplete='off'
            placeholder='Last name'
            value={user.lname} // Controlled component: value from state
            required
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            onChange={inputHandler}
            id="email"
            name="email"
            autoComplete='off'
            placeholder='Email'
            value={user.email} // Controlled component: value from state
            required
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            onChange={inputHandler}
            id="password"
            name="password"
            autoComplete='off'
            placeholder='Password'
            value={user.password} // Controlled component: value from state
            required
          />
        </div>
        <div className="inputGroup">
          <button type="submit">ADD USER</button>
        </div>
      </form>
    </div>
  );
};

export default Add;
