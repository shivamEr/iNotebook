import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

export const Login = (props) => {

  const [credentials, setCredentials] = useState({email: "", password: ""});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email:credentials.email, password:credentials.password})
    });
    
    const data = await response.json();
    if(data.success){
      localStorage.setItem('token', data.authtoken);
      navigate('/');
      props.showAlert("Logged In Successfully","success");
    }
    else{
      props.showAlert("Wrong Credentials","warning");
    }
    console.log(data);
  }


  const onChange = (e)=>{
    setCredentials({...credentials, [e.target.name]: e.target.value});
  }

  return (
    <div className='container mt-2'>
      <h3 className='my-3'>Login to continue to iNotebook</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" value={credentials.email} onChange={onChange} aria-describedby="emailHelp" name='email' id="email" required/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" value={credentials.password} onChange={onChange} name='password' id="password" minLength={5} required/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
