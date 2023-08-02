import React, { useEffect, useState } from 'react'
import "./header.css"
import bell from "../../../assets/images/newnotifyicon.jpg";
import { isExpired, decodeToken } from "react-jwt";

export default function Header(props) {
  console.log(props);
  // console.log(props);
  // var [decodedData, setFullData] = useState();
  //   useEffect(() => {
  //   var token = localStorage.getItem("token");
  //   setFullData(decodeToken(token));
  //   console.log(decodedData);
  // },[])
  return (
    <div>
          <header className='header'>
              <input type="text" className="header-input" placeholder='🔍 search'></input>
              <div className='user-details'><img className="notifications" src={bell}></img>
          <p className='user-name'>{props?.mydata.FullName}</p>
          <div className='dp'>
            <img src={props?.mydata.avatar} style={{height:"45px",width:"45px"}}></img>
                  </div>
              </div>
      </header>
    </div>
  )
}
