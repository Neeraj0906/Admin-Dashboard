import React from 'react'
import "./sidenav.css"
import { Link, Navigate, useNavigate } from 'react-router-dom'
export default function Sidenav() {
  const navigate = useNavigate();
  return (
    <div>
      <div className='sidenav-container'>
        <ul>
          <Link to ="/" ><li>dashboard</li></Link>
          <Link to="/accounts"><li>Accounts</li></Link>
          <Link to ="/Productslist"><li>Productslist</li></Link>
          <Link to ="/Addproducts"><li>Addproducts</li></Link>
          <button onClick={() => {
            localStorage.removeItem("token");
            navigate("/");
          }}>sign out</button>
        </ul>
      </div>
    </div>
  )
}
