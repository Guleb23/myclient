import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './navVurBBB.css'

export default function NavbarButtons(props) {
    const location = useLocation();
  return (
    <Link to={props.to}>
        <div className='btn-body-vid'>
            <p>{props.title}</p>
        </div>
    </Link>
  )
}
