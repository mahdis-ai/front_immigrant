import React, { useState ,useEffect } from 'react';
import TextField from "@material-ui/core/TextField";
import { Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import ReactDOM from 'react-dom';
import axios from "axios";
var Link = require('react-router').Link;

// import { BrowserRouter as Router, Switch, RouteوRedirect } from 'react-router-dom';





var appointment ="";






function Fnc() {
  return (





      
    <div style={{
                    
                        
                        
                    
      textAlign: 'center',    
      marginTop: "15%",
          
        }}>

        <h3>صحت کاربر تایید شد</h3>

  

        {(() => {

  

           switch (appointment) {

              case 'lawyer':


      

return (
  <div>
                        <h1>ورود به پنل وکالت
                        </h1>
                  
                        <a href="http://localhost:3000/lawyer-app" rel="noreferrer">
  برای ورود به پنل وکالت کلیک کنید.
</a>


</div>
       );              
                  
                  
              case 'secretary':

            
return (
<div>
                      <h1>ورود به پنل منشی
                      </h1>
                
                      <a href="http://localhost:3000/clerk-app" rel="noreferrer">
برای ورود به پنل منشی کلیک کنید.
</a>


</div>
     ); 


     case 'applicant':

            
      return (
                    
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
    
    
    

                      <h1>ورود به صفحه  ی اصلی
                      </h1>
                
                      <a href="http://localhost:3000/homePage" rel="noreferrer">
برای ورود به صفحه ی اصلی کلیک کنید.
</a>


</div>
      </div>
      ); 
              
                

           }

  

        })()}

  

    </div>

  );
        
}






        
//       <div >
  
//           <h1>شما {appointment} هستید</h1>
  
    
  
//           {(() => {
  
    
  
//              switch (appointment) {
  
//                 case 'وکیل':


        

// return (
//     <div>
//                           <h1>ورود به پنل وکالت
//                           </h1>
                    
//                           <a href="http://localhost:3000/lawyer-app" rel="noreferrer">
//     برای ورود به پنل وکالت کلیک کنید.
//   </a>
  

// </div>
//          );              
                    
                    
//                 case 'منشی':
  
              
// return (
//   <div>
//                         <h1>ورود به پنل منشی
//                         </h1>
                  
//                         <a href="http://localhost:3000/clerk-app" rel="noreferrer">
//   برای ورود به پنل منشی کلیک کنید.
// </a>


// </div>
//        ); 
//                 default:
  
//                     return (
  
//                       <div>
//                           <h1>بازگشت به سایت
//                           </h1>
                    
//                           <a href="http://localhost:3000/homePage" rel="noreferrer">
//     برای بازگشت به سایت کلیک کنید.
//   </a>
  

// </div>
//                     )
  
//              }
  
    
  
//           })()}
  
    
  
//       </div>
  
    
          
  


    
//   return(
    
//     <div
//     style={{
     
//       display: 'flex',
//       justifyContent: 'Center',
//       alignItems: 'Center',
//       height: '100vh',
            
//     }}
//   >
    
//    <div 
//    style={{
      
// textAlign: 'center',    
  
//   }}
// >
  
//     <h2 >موکل گرامی یعد از چند روز وکیلتان با شما ارتبازط برقرار خواهد کرد . با تشکر<br></br>
  
//   نوع مهاجرت انتخابی : {appointment}</h2>
  
//   </div>
//   </div>
//   );





const SignIn = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");


  const getInitialState = () => {
    const value = "applicant";
    
    return value;
    
  };

  const [value, setValue] = useState(getInitialState);

  
  const handleChange = (e) => {
    setValue(e.target.value);
    
  };
function postdata() {
  axios.post('http://localhost:8000/login', {name,password})
 .then((response)=>{
      setValue(response.data['member']);
        localStorage.setItem("user", JSON.stringify(response.data));
      
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


     
      <TextField
        value={name}
        label="نام کاربری"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <h3>نام کاربری: {name} </h3>


      
      <TextField
        value={password}
        label="رمز"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <h3>رمز: {password} </h3>



      
      <Button

      
  onClick={() => {
    // const txt = `پرداخت موفقیت آمیز بود .نوبت شما : ${value}`;
    // alert(txt);
    postdata()
    
    appointment = value;
   
    ReactDOM.render(<Fnc />, document.getElementById('root'));
  }}

 //////////////////////////////// to='/homePage' activeStyle
>
  تایید
</Button>





    </div>
    </div>
  );
};
  
export default SignIn;
