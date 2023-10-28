import React from 'react'


const Home = (props) => {
    return (
        <div className="home">
            <div>
                
            </div>
            <div style={{
                height: '500px',
                width: '1000px',
                marginTop: '30px',
                marginLeft: 'auto',
                marginRight: 'auto',
                backgroundColor: 'black',
                borderRadius: '10px',
                overflow: 'hidden',
                
            }}>
                <div style={{
                    marginTop: '-200px',
                    marginLeft: '50px',
                    width: '900px',
                    height: '900px', 
                    borderRadius: '50%',
                    backgroundImage: `url(${process.env.PUBLIC_URL}/sky.jpg)`
                }} >
                    <img src={process.env.PUBLIC_URL + '/spacecraft.png'} alt="WRRR" style={{
                        borderRadius: '50%',
                        height: '50px',
                        width: '50px',
                        marginTop: '425px',
                        marginLeft: '425px',
                        zIndex: '2',
                        position: 'absolute',
                        transform: `rotate(${props.rotationAngle}deg)`
                    }}/>
                    
                    
                </div>
            </div>
            {/* <div style={{
                backgroundColor: 'white',
                height: '200px',
                width: '100px',
                zIndex: '2'
            }}>
                <p>{props.y}</p>
                <p>{props.x}</p>
            </div> */}
        </div>
        
    )
}
export default Home;