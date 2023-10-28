import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Home from './Home'
import Navbar from './Navbar'
import Controller from './Controller'
import Planets from './Planets'

function App() {
  const [data, setData] = useState({x: null, y: null});
  const [rotationAngle, setRotationAngle] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
    console.log("testing get request")
    axios.get('http://192.168.29.106:2023/api/Station')
    .then((response) => {
      const result = response.data;
      console.log(result)
      setData({x: result.transform['x'], y: result.transform['y'], rotAngl: result.transform['directionAngleDegrees']});
    })
      .catch(error => console.error(error));
    }, 500); // call the API every 1 second
    return () => clearInterval(interval);
  }, []);

  useEffect(() => { 
    if (data.rotAngl !== null) {
      setRotationAngle(data.rotAngl);
    }
  }, [data.rotAngl]);

  return (
    <div>
    {/* < Navbar /> */}
    <div>
      < Home rotationAngle={rotationAngle}/>
      {/* < Planets data /> */}
    </div>
    {/* < Controller/> */}
    <div style={{
      height: '500px',
      width: '1000px',
      marginTop: '30px',
      marginLeft: 'auto',
      marginRight: 'auto',
      overflow: 'hidden',
    }}>
      <p>Координаты относительно космической станции</p>
      <p>X: {data.x}</p>
      <p>Y: {data.y}</p>
    </div>
  </div> 
  );
}
export default App;
