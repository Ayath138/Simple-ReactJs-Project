import React, { useEffect, useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

     useEffect(()=>{
        console.log('Im coming from');
     },[count]);
    

    const decrement = () => {
        if (count > 0)setCount(count-1);
       };

    const increment = () => {
        setCount(count + 1);
    };
     const resetbtn=()=>{
        setCount(0);
     }

    return (
        <div>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
            <div>
                <button onClick={resetbtn}>reset</button>
            </div>
        </div>
    );
};

export default Counter;