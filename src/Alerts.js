import React from 'react'
import './Alerts.css'

function Alerts({alert}) {
    
  return (
    <div className={`alert alert-${alert.type}`}>
      <i className="fas fa-info-circle"/>{alert.msg}
    </div>
  )
}

export default Alerts
