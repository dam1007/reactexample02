import React, { useState } from 'react';
import OddEventResult from './OddEventResult';

const Counter = ({f}) => {

    /* const style = {
        background: '#000',
        color: '#fff',
    }; */
    // console.log({e});

    const [count, setCount] = useState(f);

    function increaseState() {
        setCount(count + 1);
    }
    function decreaseSTate() {
        setCount(count - 1);
    }

    return (
        <main>
            <h2>{count}</h2>
            <button onClick={increaseState}>+</button>
            <button onClick={decreaseSTate}>-</button>
            <OddEventResult count={count} />
        </main>
    );
    
};

Counter.defaultProps={
    f: 0,
};

export default Counter;