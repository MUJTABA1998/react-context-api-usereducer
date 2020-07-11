import React,{useContext} from 'react'
import CounterContext from './CounterContext'

const Child = () =>{

    let counterValue = useContext(CounterContext);

    return (
        <div>
            <h1>Context API Demo</h1>
            <br/>
            <h2>Counter Value is : {counterValue[0]}</h2>
            <br/>
            <button onClick={()=>{counterValue[1](++counterValue[0])}}>Increament</button>
        </div>
    )

}

export default Child;