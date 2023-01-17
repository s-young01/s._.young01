import React, { useState, useEffect } from 'react';

const EffectSample = () => {
    const [number, setNumber] = useState(0);
    const [text, setText] = useState("green");
    const onAdd = () => {
        setNumber(number + 1);
    }

    // 렌더링 될 때마다 매번 실행 
    useEffect(() => {
        console.log('렌더링 되었습니다.👌');
    })

    // 렌더링 될 때 한 번만 실행 (= 마운트 되고 딱 한 번 실행)
    // 빈 배열 안에 구독 할 값을 아무 것도 주지 않으면 
    // 렌더링이 되든 말든 신경 안 씀
    useEffect(() => {
        console.log('마운트 되었습니다.👍');
    }, [])

    // 렌더링 될 때 한 번 실행 + value값이 변경될 때만 실행
    useEffect(() => {
        console.log('숫자가 변경 되었습니다.⭐');
    }, [number]) // number의 상태가 변경될 때만 실행됨
    return (
        <div>
            <span>{number}</span>
            <button onClick={onAdd}>update</button>
            <input value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
    );
};

export default EffectSample;
