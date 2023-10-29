import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Home from './Home'
import Planet from './Planet'

function App() {
  const [data, setData] = useState({x: null,
    y: null,
    rotAngl: null
  });
  const [data_1, setData_1] = useState([])

  useEffect(() => {
    const interval = setInterval(() => {
    axios.get('http://192.168.29.106:2023/api/Station')
    .then((response) => {
      const result = response.data;
      // console.log(result)
      setData({x: result.transform['x'],
                y: result.transform['y'],
                rotAngl: result.transform['directionAngleDegrees']});
      
    })
    .catch(error => console.error(error));
    }, 100); // call the API every 0.5 second
    return () => clearInterval(interval);
    }, []);

  useEffect(() => {
    
    const interval = setInterval(() => {
    axios.get('http://192.168.29.106:2023/api/Station/planets?scanRadius=600')
    .then((response) => {
      const result = response.data;
      console.log(result)
      setData_1({
        result
      });
             
    })
      .catch(error => console.error(error));
    }, 100); // call the API every 0.5 second
    return () => clearInterval(interval);
    }, []);
    const planets = data_1?.result?.map(planet =>
      <Planet 
        planet_x={planet.position.x}
        planet_y={planet.position.y}
        starship_x={data.x}
        starship_y={data.y}
        planet_name={planet.name}
        planet_img={planet.imageUrl}
        planet_radius={planet.radius}
        />);

        // console.log(planets)
        
    // const home = (
        
    //   );
  return(
    <div> 
    <Home rotationAngle={data.rotAngl} />
      {planets}
    
    <div style={{
      backgroundColor: 'white',
      width: "400px",
      height: '600px',
      position: 'absolute',
      marginLeft: '1100px',
      marginTop: '-1000px', 
      borderRadius: '10px',
      zIndex: '10'

    }}>
      <h1 style={{ textAlign: 'center' }}>Координаты корабля:</h1>
      <div style={{
        top: '20px',
        left: '20px',
        fontSize: '24px',
        fontWeight: 'bald',
        marginLeft: '30px',
        marginTop: '30px', 
        
      }}>
        
        X: {data.x}
        
      </div>
      <div style={{
        top: '20px',
        left: '20px',
        fontSize: '24px',
        fontWeight: 'bald',
        marginLeft: '30px',
        marginTop: '30px'
      }}>
        Y: {data.y}
      </div>
    </div>
    </div>);
}
export default App;
