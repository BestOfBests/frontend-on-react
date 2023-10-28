import { useState } from 'react'
const Controller = () => {
    // const [name, setName] = useState('mario');
    const leftClick = () => {
        console.log('left')
    }
    const rightClick = () => {
        console.log('right')
    }
    const forwardClick = () => {
        console.log("let's gooo!")
    }
    return (
        <div className="controller">
            {/* <p> {name} </p> */}
            <button onClick={leftClick}
            style={{
                height: '100px',
                width: '100px'
            }}> left</button>

            <button onClick={forwardClick}
            style={{
                height: '100px',
                width: '100px'
            }}> forward</button>

            <button onClick={rightClick}
            style={{
                height: '100px',
                width: '100px'
            }}> right</button>


        </div>
    )
}
export default Controller;