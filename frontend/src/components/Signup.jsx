import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Signup = (props) => {
  const [data, setData] = useState({ name: '', email: '', password: '' });
  const host = import.meta.env.VITE_API_URL;
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    const json = await response.json();
    if (json.success) {
      props.showAlert("Register Successfully","success");
      navigate('/login');
    }
    else {
      props.showAlert("Unable to register","warning");
    }

  }

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  return (
    <div className='container mt-2'>
        <h3 className='my-3'>Create an account to used iNotebook</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" value={data.name} onChange={onChange} aria-describedby="emailHelp" name='name' id="name" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" value={data.email} onChange={onChange} aria-describedby="emailHelp" name='email' id="email" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" value={data.password} onChange={onChange} name='password' id="password"  minLength={5} required/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
