import React ,{ useState ,useEffect } from 'react';
import axios from "axios";
const Home = () => {
  const [start, setStart] = useState(null);
  useEffect(() => {
    getindex()
      } ,[])
function getindex() {
  axios({
      method: "GET",
      url:"http://localhost:8000/",
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
        display: 'flex',
        justifyContent: 'Right',
        alignItems: 'Right',
        height: '100vh'
      }}
    >
      <h1>Welcome to this website</h1>
    </div>
  );
};
  
export default Home;