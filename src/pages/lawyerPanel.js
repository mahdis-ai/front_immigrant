import React, { useState } from 'react';
import TextField from "@material-ui/core/TextField";
import { Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import ReactDOM from 'react-dom';
var Link = require('react-router').Link;

var lawyerVar ="";
var lawyerVar2 ="";
function LawyerFunc() {
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






    
    
    <h2 >دریافت فایل<br></br>
  
   {lawyerVar2}</h2>
  
  

  </div>
  </div>
  );
}

function SendToClerk() {
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






    
    
    <h2 > ارسال به منشی<br></br>
  
   {lawyerVar2}</h2>
  
  

  </div>
  </div>
  );
}






            
function LawyerApp() {
  
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
  <h1 style={{color: "red"}}>پنل وکیل</h1>
  <h2 > موکلان و تلفن هایشان</h2>

  
        <select value={value2} onChange={handleChange}>
          <option value="احمد رضا حسن زاده _ ویزای کاری -09111111111">احمد رضا حسن زاده _ ویزای کاری -09111111111</option>
          <option value="لاله رسولی   _ ویزای کاری -09222222222">لاله رسولی   _ ویزای کاری -09222222222</option>
       
        </select>
        <p>{`انتخاب شما : ${value2}`}</p>
        
        {/* <Button
    onClick={() => {
      // const txt = `پرداخت موفقیت آمیز بود .نوبت شما : ${value}`;
      // alert(txt);
      lawyerVar = value2;
      ReactDOM.render(<LawyerFunc />, document.getElementById('root'));
    }}
  >
    تایید
  </Button> */}
  
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

  <h2 > دریافت مدارک مشتریان خواهان وقت سفارت و ارسال به منشی</h2>

 
        <select value={value3} onChange={handleChange2}>
          <option value=" محمدمحمدی- ویزای کاری- 09333333333"> محمدمحمدی- ویزای کاری- 09333333333</option>
          <option value="اردشیر اردشیری - ویزای کاری - 09444444444">اردشیر اردشیری - ویزای کاری - 09444444444</option>
       
        </select>
        <p>{`انتخاب شما : ${value3}`}</p>
        
        <Button
    onClick={() => {
      // const txt = `پرداخت موفقیت آمیز بود .نوبت شما : ${value}`;
      // alert(txt);
      lawyerVar2 = value3;
      ReactDOM.render(<LawyerFunc />, document.getElementById('root'));
    }}
  >
    دریافت فایل
  </Button>
  <Button
    onClick={() => {
      // const txt = `پرداخت موفقیت آمیز بود .نوبت شما : ${value}`;
      // alert(txt);
      lawyerVar2 = value3;
      ReactDOM.render(<SendToClerk />, document.getElementById('root'));
    }}
  >
    ارسال به منشی
  </Button>



  
  {/* <p>{`نوبت شما : ${appointment}`}</p> */}
      </div>
      </div>







      </div>
    );



};

export default LawyerApp;


