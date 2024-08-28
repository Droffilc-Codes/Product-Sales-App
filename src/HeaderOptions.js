import React from 'react'
import './HeaderOptions.css'


function HeaderOptions({title}) {
  return (
    <div className='headerOptions'>       
      <h3 className='headerOptions__title'>{title}</h3>
    </div>
  )
}

export default HeaderOptions
