import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button} from 'react-bootstrap';
import ReactDOM from 'react-dom';



var x ="";
function ChooseFile() {
  return <h2 style={{
    marginLeft: "40%",
  }}>بعد کلیک کردن این دکمه باید فایل انتخاب شود !!!!!!!!! {x}</h2>;
}
function App() {
  

  return (
    
    <div
      style={{
       
        display: 'flex',
        justifyContent: 'Center',
        alignItems: 'Center',
        height: '100vh',
        backgroundImage: `url(/docs.jpg)`,
        backgroundSize: 'cover',
        lineHeight: '20'
        
      }}
    >
      
     <div 
     style={{
      
          
          
 
  textAlign: 'center',    
    
      
    }}
>


<h1 style={{color: "#ffda74"}}>ارسال مدارک</h1>
<h5 style={{color: 'lightgray'}}>تمام مدارک مهاجرتیت رو اسکن کن و همه رو تو یه فایل زیپ قرار بده و تو این صفحه ارسال کن</h5>

      <Button
  onClick={() => {
    // const txt = `پرداخت موفقیت آمیز بود .نوبت شما : ${value}`;
    // alert(txt);
    
    ReactDOM.render(<ChooseFile />, document.getElementById('root'));
  }}
  size="lg"
>
برای ارسال مدارک کلیک کن
</Button>

{/* <p>{`نوبت شما : ${appointment}`}</p> */}
    </div>
    </div>
  );
  

  
}


export default App