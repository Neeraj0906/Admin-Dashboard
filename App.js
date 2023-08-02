import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css'; 
// import Login from './components/Login/Login';
import Login1 from './components/Login/Login1';
import Dashboard from './components/Login/Dashboard/Dashboard';
import Sidenav from './components/CommonComponents/Sidenav/Sidenav';
import Header from './components/CommonComponents/Header/Header';
import Accounts from './components/Accounts/Accounts';
import Productslist from './components/Products List/Productslist';
import Addproducts from './components/Add Products/Addproducts';
import Login from './components/Login/Login1';
import { decodeToken } from "react-jwt";
import React, { useEffect, useState } from 'react';
function App(){

// if (localStorage.getItem("token") = null) {
// if(localStorage.getItem("token") != null){
// return (
//     <div>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/login" element={<Login1/>}></Route>
//         </Routes>
      
//       </BrowserRouter>
//     </div>
//   );
// }
  const [token, setToken] = useState();
  const [data, setData] = useState();
  useEffect(() => {
    setToken(localStorage.getItem("token"));
    console.log(decodeToken(localStorage.getItem("token")));
    setData(decodeToken(localStorage.getItem("token")))
  }, [token]);
  return (
    <BrowserRouter>
      {token == null && <Login1 state={setToken} />}
      {token != null && data!=null && (        
      < div >
        <div className='app-container'>
          <div className='sidenav-container'>
            <Sidenav />
          </div>
          <div className='main-container'>
            <div className='header-container'>
                {data && <Header mydata= {data} />}
            </div>
            <div className='content-container'>
              <Routes>
                {/* <Route path="/login" element={<Login1/>}></Route> */}

                <Route index element={<Dashboard />}></Route>
                <Route path='/accounts' element={<Accounts state={data} />}></Route>
                <Route path='/productslist' element={<Productslist />}></Route>
                <Route path='/addproducts' element={<Addproducts />}></Route>

              </Routes>
            </div>
          </div>
        </div>
        </div>)}
        </BrowserRouter>
    ); 
  }


export default App;
