import React, {useState, useEffect} from 'react';
import LoginForms from '../form/LoginForms';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [credentials, setCreadentials] = useState(null);
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
        <LoginForms onSubmit={(e) => setCreadentials(e)}></LoginForms>
    </div>
  )
}

export default Login
