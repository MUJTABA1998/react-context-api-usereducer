import React from 'react'
import CounterReducer from './CounterReducer'
import { useReducer } from 'react'
import counterReducer from './CounterReducer'

const Child2 = () =>{

    let [state, dispatch] = useReducer(counterReducer,1);

    return(
        <div>
            <h1>Reducer Demo</h1>
            <br/>
            <h2>Counter value is : {state}</h2>
            <button onClick={()=>{
                dispatch('INCREAMENT')
            }}>Add One</button>
            <br/>
            <br/>
            <button onClick={()=>{
                dispatch('DCREAMENT')
            }}>Minus One</button>
        </div>
    )
}

export default Child2