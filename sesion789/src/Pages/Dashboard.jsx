import React from 'react'
import ContactView from '../componets/ContactView'

const Dashboard = () => {
  return (
    <div>
    <header className="Container-pag">
      <div style={ {margin: '1rem'}}>        
        <ContactView/>
        </div>      
      </header>
      
    </div>
  )
}

export default Dashboard
