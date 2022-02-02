import React , { useState ,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
import axios from "axios";


var x ="";
function ChooseFile() {
  return <h2 style={{
    marginLeft: "40%",
  }}>بعد کلیک کردن این دکمه باید فایل انتخاب شود !!!!!!!!! {x}</h2>;
}
function App() {
  
  const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
  const history = useHistory();
  const changeHandler = (event) => {

		setSelectedFile(event.target.files[0]);

		setIsFilePicked(true);

	};

	const handleSubmission=(event) =>{
    event.preventDefault();
    const formData = new FormData();
		formData.append('FILES', selectedFile);
    axios.post("http://localhost:8000/reservation/sendingdocs", formData)
    .then((response) => {

      console.log(response);
      

    })

    .catch((error) => {

      console.error('Error:', error);

    });

	}

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


<h1 style={{color: "#ffda74",marginTop:"150px"}}>ارسال مدارک</h1>
<h5 style={{color: 'lightgray',marginTop: '30px'}}>تمام مدارک مهاجرتیت رو اسکن کن و همه رو تو یه فایل زیپ قرار بده و تو این صفحه ارسال کن</h5>
<input style={{height:"70px",border:"10"}}type="file" name="file" onChange={changeHandler} />
			{isFilePicked ? (

				<div>
					<p style={{color:"#FFFF00",marginBottom:"2px"}}>Filename: {selectedFile.name}</p>
				</div>

			) : (

				<p>Select a file to show details</p>

			)}
      <Button 
  onClick={handleSubmission}
  size="lg"
>submit
</Button>

{/* <p>{`نوبت شما : ${appointment}`}</p> */}
    </div>
    </div>
  );
  

  
}


export default App