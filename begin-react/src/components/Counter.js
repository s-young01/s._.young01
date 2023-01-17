// 리액트가 가지고 있는 useState함수를 쓰겠다..는 뜻
import React, {useState} from 'react';

const Counter = () => {
    // [상태, 상태업데이트해주는함수] = useState(상태 초기 값)
    const [number, setNumber] = useState(0);
    const onIncreasse = () => {
        // console.log('+1');
        setNumber(number +1);
        console.log(number);
    }
    const onDecreasse = () => {
        // console.log('-1');
        setNumber(number -1);
        console.log(number);
    }
    return (
        <div>
            <h2>{number}</h2>
            <button onClick={onIncreasse}>+1</button>
            <button onClick={onDecreasse}>-1</button>
        </div>
    );
};

export default Counter;