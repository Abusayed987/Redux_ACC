import React, { useReducer } from 'react';

const Counter = () => {
    const initialState = 0;


    const reducer = (state, action) => {
        console.log(action);
        if (action.type === "INCREMENT") {
            return state + 1;
        }
        else if (action.type === "DECREMENT") {
            return state - 1;
        }

    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className='text-center mt-5'>
            <h1 className='text-2xl text-red-400'>{state}</h1>
            <button className='p-1 m-3 border'
                onClick={() => dispatch({ type: "DECREMENT" })}
            >Decrement</button>
            <button className='p-1 m-3 border'
                onClick={() => dispatch({ type: "INCREMENT" })}
            >Increment</button>
        </div>
    );
};

export default Counter;