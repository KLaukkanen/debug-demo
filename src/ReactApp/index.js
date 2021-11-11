import React from 'react'
export default function App(props){
    const [counter, setCounter] = React.useState(0)
    return <div>
        <p>Button pressed {counter} times</p>
        <button onClick = {()=>setCounter(counter + 1)}>
            Increment
            </button>

        </div>
}