import React, { useState } from 'react';
import TextField from "@material-ui/core/TextField";
import { Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import ReactDOM from 'react-dom';
var Link = require('react-router').Link;

var clerkVar ="";
var clerkVar2 ="";
var clerkVar3 ="";
var clerkVar4 ="";
var clerkVar5 ="";

function ClerkFunc() {
  return(
    
    <div
    style={{
     
      display: 'flex',
      justifyContent: 'Center',
      alignItems: 'Center',
      height: '100vh',
      
   
      
      
    }}
  >
    
   <div 
   style={{
    
        
        
    
textAlign: 'center',    
  
    
  }}
>






    
    
    <h2 ><br></br>
  
    {clerkVar3}  
    برای موکل 
   {clerkVar} 
   انتخاب شد
   </h2>
  
  

  </div>
  </div>
  );
}

function FileFunct() {
  return(
    
    <div
    style={{
     
      display: 'flex',
      justifyContent: 'Center',
      alignItems: 'Center',
      height: '100vh',
      
   
      
      
    }}
  >
    
   <div 
   style={{
    
        
        
    
textAlign: 'center',    
  
    
  }}
>






    
    
    <h2 >دریافت مدارک<br></br>
  
   {clerkVar2}</h2>
  
  

  </div>
  </div>
  );
}






function EmbassyAppointment() {
    return(
      
      <div
      style={{
       
        display: 'flex',
        justifyContent: 'Center',
        alignItems: 'Center',
        height: '100vh',
        
     
        
        
      }}
    >
      
     <div 
     style={{
      
          
          
      
  textAlign: 'center',    
    
      
    }}
  >
  
  
  
  
  
  
      
      
      <h2 >وقت سفارت برای <br></br>
    
     {clerkVar4}
     <br></br>
     ثبت شد
     <br></br>

     {clerkVar5}
     </h2>
    
    
  
    </div>
    </div>
    );
  }
  
  
  




































            
function ClerkApp() {

    const [appointment, setAppointment] = useState("مثلا : سفارت عمان در تهران - 1401/08/05 ساعت 8 صبح");



















    const getInitialState = () => {
      const value2 = "؟";
      


      return value2;
      
    };
  
    const [value2, setValue] = useState(getInitialState);
   
    




    const handleChange = (e) => {
      setValue(e.target.value);
      
    };




    const getInitialState2 = () => {
      const value3 = "؟";
      


      return value3;
      
    };
  
    const [value3, setValue2] = useState(getInitialState2);
   
    




    const handleChange2 = (e) => {
      setValue2(e.target.value);
      
    };







    const getInitialState3 = () => {
        const value4 = "؟";
        
  
  
        return value4;
        
      };
    
      const [value4, setValue3] = useState(getInitialState3);
     
      
  
  
  
  
      const handleChange3 = (e) => {
        setValue3(e.target.value);
        
      };
  
  
  






      const getInitialState4 = () => {
        const value5 = "؟";
        
  
  
        return value5;
        
      };
    
      const [value5, setValue4] = useState(getInitialState4);
     
      
  
  
  
  
      const handleChange4 = (e) => {
        setValue4(e.target.value);
        
      };
  
  






















  
    return (
     
<div
style={{ display: 'flex',}}



>



      <div
        style={{
         
           
          justifyContent: 'Right',
          alignItems: 'Right',
        //   height: '100vh',
          lineHeight: '5'
          
          
        }}
      >
        
       <div 
       style={{
        
            
            
  
    textAlign: 'center',    
      
        
      }}
  >
  <h1 style={{color: "red"}}>پنل منشی</h1>
  <h2 > انتخاب وکیل برای مشتریان جدید</h2>

  
        <select value={value2} onChange={handleChange}>
          <option value="احمد رضا حسن زاده _ ویزای کاری -09111111111">احمد رضا حسن زاده _ ویزای کاری -09111111111</option>
          <option value="لاله رسولی   _ ویزای کاری -09222222222">لاله رسولی   _ ویزای کاری -09222222222</option>
       
        </select>
        <p>{`انتخاب مشتری : ${value2}`}</p>
        
        <select value={value4} onChange={handleChange3}>
          <option value="وکیل خلیل پور">وکیل خلیل پور</option>
          <option value="وکیل قریان نژاد">وکیل قربان نژاد</option>
       
        </select>
        <p>{`انتخاب وکیل : ${value4}`}</p>
        

        <Button
    onClick={() => {
      // const txt = `پرداخت موفقیت آمیز بود .نوبت شما : ${value}`;
      // alert(txt);
      clerkVar = value2;
      clerkVar3 =value4;

      ReactDOM.render(<ClerkFunc />, document.getElementById('root'));
    }}
  >
    تایید
  </Button>
  
  {/* <p>{`نوبت شما : ${appointment}`}</p> */}
      </div>
      </div>





      <div
        style={{
         
          
          justifyContent: 'Left',
          alignItems: 'Left',
        //   height: '100vh',
          lineHeight: '5'
          
          
        }}
      >
        
       <div 
       style={{
        
            
            
  
    textAlign: 'center',    
      
        
      }}
  >

  <h2 > دریافت مدارک مشتریان خواهان وقت سفارت </h2>

 
        <select value={value3} onChange={handleChange3}>
          <option value=" محمدمحمدی- ویزای کاری- 09333333333"> محمدمحمدی- ویزای کاری- 09333333333</option>
          <option value="اردشیر اردشیری - ویزای کاری - 09444444444">اردشیر اردشیری - ویزای کاری - 09444444444</option>
       
        </select>
        <p>{`انتخاب شما : ${value3}`}</p>
        
        <Button
    onClick={() => {
      // const txt = `پرداخت موفقیت آمیز بود .نوبت شما : ${value}`;
      // alert(txt);
      clerkVar2 = value3;
      ReactDOM.render(<FileFunct />, document.getElementById('root'));
    }}
  >
    دریافت فایل
  </Button>
 

  
  {/* <p>{`نوبت شما : ${appointment}`}</p> */}
      </div>
      </div>
















      <div
        style={{
         
          
          justifyContent: 'Center',
          alignItems: 'Center',
        //   height: '100vh',
          lineHeight: '5'
          
          
        }}
      >
        
       <div 
       style={{
        
            
            
  
    textAlign: 'center',    
      
        
      }}
  >

  <h2 > -----ثبت وقت سفارت برای مشتریان </h2>

 
        <select value={value5} onChange={handleChange4}>
          <option value=" محمدمحمدی- ویزای کاری- 09333333333"> محمدمحمدی- ویزای کاری- 09333333333</option>
          <option value="اردشیر اردشیری - ویزای کاری - 09444444444">اردشیر اردشیری - ویزای کاری - 09444444444</option>
       
        </select>
        <p>{`انتخاب شما : ${value5}`}</p>
        

        <h2>ثبت نام</h2>
      <TextField
        value={appointment}
        label="متن نوبت"
        onChange={(e) => {
          setAppointment(e.target.value);
        }}
      />
      <h3>متن نوبت: {appointment} </h3>











        <Button
    onClick={() => {
      // const txt = `پرداخت موفقیت آمیز بود .نوبت شما : ${value}`;
      // alert(txt);
      clerkVar5 =appointment;
      clerkVar4  = value5;
      ReactDOM.render(<EmbassyAppointment />, document.getElementById('root'));
    }}
  >
    ثبت نویت
  </Button>
 

  
  {/* <p>{`نوبت شما : ${appointment}`}</p> */}
      </div>
      </div>





















      </div>
    );



};

export default ClerkApp;


