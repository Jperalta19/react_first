import React, { useEffect, useState} from 'react'
import RegisterForm from '../form/RegisterForm'
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const [credentials, setCredentials] = useState(null);
  const navigate = useNavigate();
  const user = localStorage.getItem('user') || null;

  useEffect(() => {
    if (user) {
      navigate('/Dashboard');
    }
  });
  useEffect(() => {
    if (credentials) {
      const c = JSON.stringify(credentials);
      localStorage.setItem('user', c);
      navigate('/Dashboard');
    }
  });

  return (
    <div>
        <RegisterForm onSubmit={(e) => setCredentials(e)}/>
    </div>
  )
}

export default Register
