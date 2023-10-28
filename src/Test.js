import React, { useState, useEffect  } from 'react'
// import React, { useState } from 'react';
// import { FaSync } from 'react-icons/fa';

const Test = () => {
    const [rotation, setRotation] = useState(0);

    
    const [rotate, setRotate] = useState(false);

    const handleClick = () => {
        setRotation(rotation + 30);
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
        if (event.key === 'w') {
            handleClick();
        }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
        window.removeEventListener('keydown', handleKeyDown);
    };
    }, []);
    return (
    <button onClick={handleClick}>
        {/* <div style={{
                height: '400px',
                width: '90%',
                marginTop: '30px',
                marginLeft: '5%',
                backgroundColor: 'beige',
                borderRadius: '10px'
            }}></div> */}
            {/* <button onClick={handleClick}>Rotate</button> */}
            <div style={{ width: '100px', height: '100px', backgroundColor: 'red', transform: `rotate(${rotate}deg)` }}>
      
    </div>
    </button>
  );
}
export default Test;