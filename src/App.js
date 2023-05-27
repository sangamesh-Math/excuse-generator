import './App.css';
import {useState} from "react";
import Axios from "axios";
function App() {
  const [excuseDetails, setExcuseDetails] = useState(null);
  // const [displayExcuse, setDisplayExcuse] = useState(null);
  
  const fetchExcuse = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then((resp) => {
    setExcuseDetails(resp.data[0].excuse);
    });
  };
  return (
    <div className="App">
      <h1>Generate an excuse</h1> 
      <button onClick = {fetchExcuse("party")}>Party</button>
      <button onClick = {fetchExcuse("gaming")}>Gaming</button>
      <button onClick= {fetchExcuse("college")}>College</button>
      <button onClick = {fetchExcuse("office")}>Office</button>
      <h1>{excuseDetails}</h1>
    </div>
  );
}

export default App;
