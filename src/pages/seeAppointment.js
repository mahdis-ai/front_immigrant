import React, { useState ,useEffect } from 'react';
import { Button} from 'react-bootstrap';
const App = () => {
  const [userloggedin , setuserloggedin]=useState(false);
  const handleauth=()=>{
  const  currentuser=JSON.parse(localStorage.getItem("user"));
  if (currentuser){
    setuserloggedin(true);}
 };
  return (
    <div
    style={{
      backgroundImage: "url(/appointment_policy_pic-1024x683.jpg)",
      display: 'flex',
      justifyContent: 'Center',
      alignItems: 'Center',
      height: '100vh',
      backgroundSize: 'cover',
     
    }}
  >

<h1 style={{color: "lightgrey",fontSize:'50px'}}>مشاهده ی زمان سفارت</h1>
{userloggedin ? (

<div>
  <p style={{color:"#FFFF00"}}> سفارت پادشاهی عمان در تهران - 1401/08/05 ساعت 8 صبح</p>
</div>

) : (

<p>click button to see your appointment</p>

)}
<Button 
  onClick={handleauth}
  size="lg"
>Tap here
</Button>
  </div>
  );
};
  
export default App;