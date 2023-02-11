import React, { useEffect } from 'react';
import ContactView from '../componets/ContactView';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const navigate = useNavigate();
  const user = localStorage.getItem('user') || null;

  useEffect(() => {
    if (!user) {
      navigate('/Register');
    }
  });
  
  return (
    <div>
    <header className="Container-pag">
      <div style={ {margin: '1rem'}}>        
        <ContactView  user={user} />
        </div>      
      </header>
      
    </div>
  )
}

export default Dashboard
