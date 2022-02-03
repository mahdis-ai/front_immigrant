import React, { useState } from 'react';
import TextField from "@material-ui/core/TextField";
import { Button} from 'react-bootstrap';
import { useHistory ,Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import axios from "axios";
//var Link = require('react-router').Link;
// import { BrowserRouter as Router, Switch, RouteوRedirect } from 'react-router-dom';





var appointment ="";
var globalVisaType="";





function Fnc() {
  
    return (
  
      <div style={{
                      
                          
                          
                      
        textAlign: 'center',    
        marginTop: "15%",
            
          }}>
  
          <h1>شما {appointment} هستید</h1>
  
    
  
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
                default:
  
                  
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
                  
                  
                  
                  
                  
                  
                      
                      
                  <h2 >موکل گرامی بعد از چند روز وکیلتان با شما ارتباط برقرار خواهد کرد . با تشکر<br></br>
  
  نوع مهاجرت انتخابی : {globalVisaType}</h2>
                    
                    
                    
                  
                    </div>
                    </div>
                    )
                  
  
             }
  
    
  
          })()}
  
    
  
      </div>
  
    );
          
  }



        



    
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





const SignUp = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [mobile, setMobile] = useState("");
  const [visatype, setVisatype] = useState("");
  const [position,setPosition] = useState("");

  const getInitialState = () => {
    const value = "applicant";
    
    return value;
    
  };
  const [value, setValue] = useState(getInitialState);

  function postdata() {
    axios.post('http://localhost:8000/register', {name,pass,mobile,visatype,position})
   .then((response)=>{
        setValue(response.status);
      }).catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
          }
      })}
  
  const handleChange = (e) => {
    setValue(e.target.value);
    
  };
  return (
    <div
    style={{
     
      display: 'flex',
      justifyContent: 'Center',
      alignItems: 'Center',
      height: '100vh',
      backgroundImage: `url(/airplane-flight.jpg)`,
      backgroundSize: 'cover', 
   
    }}
  >
    
   <div 
   style={{
    
        
textAlign: 'center',    
  color: "lightgrey"
    
  }}
>

<h4 style={{display: 'block', fontSize:'30px', fontStyle:'normal', color: '#F2C74E'}}>ثبت نام</h4>

<h3 style={{marginTop: '30px',display: 'block', fontSize:'20px'}}>نام کاربری {name} </h3>

      <TextField
        style={{marginTop: '-10px'}}
        value={name}
        label="نام کاربری"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />


<h3 style={{marginTop: '20px',display: 'block', fontSize:'20px'}}>رمز {pass} </h3>
      <TextField
        style={{marginTop: '-20px'}}
        value={pass}
        label="رمز"
        onChange={(e) => {
          setPass(e.target.value);
        }}
      />


<h3 style={{marginTop: '20px',display: 'block', fontSize:'20px'}}>موبایل {mobile} </h3>
      <TextField
        style={{marginTop: '-20px'}}
        value={mobile}
        label="موبایل"
        onChange={(e) => {
          setMobile(e.target.value);
        }}
      />
 <h3 style={{marginTop: '20px',display: 'block', fontSize:'20px'}}>نوع ویزا {visatype} </h3>
      <TextField
        style={{marginTop: '-20px'}}
        value={visatype}
        label="نوع ویزا"
        onChange={(e) => {
          setVisatype(e.target.value);
        }}
      />



      
    
<h3 style={{marginTop: '20px',display: 'block', fontSize:'20px'}}>نقش {position} </h3>
<TextField
        style={{marginTop: '-20px'}}
        value={position}
        label="نقش"
        onChange={(e) => {
          setPosition(e.target.value);
        }}
      />


      
     {/* <Button

      
  onClick={() => {
    // const txt = `پرداخت موفقیت آمیز بود .نوبت شما : ${value}`;
    // alert(txt);
    postdata()
    
    appointment = position;
   globalVisaType=visatype;
    ReactDOM.render(<Fnc />, document.getElementById('root'));
  }}

  to='/homePage' activeStyle
>
  تایید
</Button>*/}
<Link to="/sign-in" className="btn btn-primary" 
  style={{marginTop: '20px',display: 'block'}}
  onClick={() => {
    postdata()
    appointment = position;
    globalVisaType=visatype;
  }}>تایید</Link>


    </div>
    </div>
  );
};
  
export default SignUp;