import React, { useState ,useEffect } from 'react';
import TextField from "@material-ui/core/TextField";
import { Button} from 'react-bootstrap';
import { useHistory,Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import axios from "axios";
import HomePage from './homePage';
// import { BrowserRouter as Router, Switch, RouteوRedirect } from 'react-router-dom';



//var Link = require('react-router').Link;

var appointment ="";





function Fnc() {
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
  
    <h2 >
  صحت کاربر تایید شد.
  </h2>
  
  </div>
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
  const [url ,setUrl] = useState("/HomePage");
  const history = useHistory();

  const [value, setValue] = useState("");

  
function postdata() {
  axios.post('http://localhost:8000/login', {name,password})
 .then((response)=>{
        localStorage.setItem("user", JSON.stringify(response.data));
        console.log(response.data['member']);
        setValue(response.data['member']);
        if(response.data['member']==="lawyer"){
          setUrl("/lawyer-app");
        }else if(response.data['member']==="secretary"){
          setUrl("/clerk-app");
        }else{
          setUrl("/HomePage")
        }
      
    }).catch((error) => {
      if (error.response) {
        console.log(error.response);
        console.log(error.response.status);
        console.log(error.response.headers);
        }
    
    })
    }

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

    <h4 style={{display: 'block',fontSize:'40px', fontStyle:'normal'}}>ورود </h4>
    <h3 style={{marginTop: '50px',display: 'block', fontSize:'20px'}}>نام کاربری {name} </h3>
     
      <TextField
        value={name}
        label="نام کاربری"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    


      <h3 style={{marginTop: '20px',display: 'block', fontSize:'20px'}}>رمز {password} </h3>
      <TextField
        value={password}
        label="رمز"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />




      
  {/*    <Button
      
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
</Button>*/}



<Link to={url} className="btn btn-primary"
  style={{marginTop: '30px',display: 'block'}}
  onClick={() => {
    postdata()
    appointment = value;
  }}>تایید</Link>

    </div>
    </div>
  );
};
  
export default SignIn;