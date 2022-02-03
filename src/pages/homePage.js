import React , { useState ,useEffect } from 'react';
import axios from "axios";
import ReactDOM from 'react-dom';

// Alter defaults after instance has been created

const HomePage = () => {
  const [start, setStart] = useState(null);
  useEffect(() => {
    gethome()
      } ,[])
function gethome() {
  axios({
      method: "GET",
      url:"/homepage",
    }).then((response)=>{
      const status = response.status
      setStart(status);
    }).catch((error) => {
      if (error.response) {
        console.log(error.response);
        console.log(error.response.status);
        console.log(error.response.headers);
        }
    })}


  
    

  return ( 
    <div
      style={{
        backgroundImage: "url(/Canada-flag-low.jpg)",
        display: 'flex',
        justifyContent: 'Center',
        alignItems: 'Center',
        height: '100vh',
        backgroundSize: 'cover',
       
      }}
    >



<h1 style={{color:"orange",fontSize:'90px'}}>موسسه ی مهاجرتی اکسپرس</h1>
    </div>
  );
};
export default HomePage;