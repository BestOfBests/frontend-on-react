import React from 'react'


const Planets = (props) => {
    return (
        <div className="planet">
            <div style={{
                position: 'absolute',
                top: props.y,
                left: props.x,
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: 'red',
                transform: `translate(-50%, -50%)`
            }}></div>
        <p>X: {Element.x}</p>
        <p>Y: {Element.y}</p>
        </div>)
    }
export default Planets;

