import React from 'react'
import './home.css';

const Home = (props) => {
    return (
        <div className="home">
            {/* {props.planet_x} */}
            <div className='home-radar-radius-out' />
            <div className="home-radar-radius" style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/sky.jpg)`,
                backgroundSize: 'cover'
            }} >

                <img src={process.env.PUBLIC_URL + '/spacecraft.png'} alt="WRRR" className="home-starship" style={{
                    transform: `rotate(${props.rotationAngle + 90}deg)`
                }} />
            </div>
        </div>
    )
}
export default Home;