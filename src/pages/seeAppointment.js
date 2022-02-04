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
      lineHeight: '20'
    }}
  >
<div 
     style={{
      
  textAlign: 'center',    
    
    }}
>

<h1 style={{color: "lightgrey",fontSize:'50px',marginTop:"200px",color: '#F2C74E'}}>مشاهده ی زمان سفارت</h1>
{userloggedin ? (

<div>
  <p style={{color:"#FFFF00"}}> سفارت پادشاهی عمان در تهران - 1401/08/05 ساعت 8 صبح</p>
</div>

) : (

<p style={{color: 'lightgray',marginTop: '70px',display: 'block'}}>برای دیدن وقت سفارت کلیک کنید</p>

)}
<Button 
  style={{marginTop: '-500px'}}
  onClick={handleauth}
  size="lg"
>Tap here
</Button>
  </div>
    </div>
  );
};
  
export default App;