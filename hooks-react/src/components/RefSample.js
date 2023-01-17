import React, {useState, useRef} from "react";

const RefSample = () => {
    // State 사용하기
    const [stateNum, setStateNum] = useState(0);
    // State 수정함수
    const addState = () => {
        setStateNum(stateNum + 1);
        console.log(stateNum);
    }

    // 그냥 변수 생성
    let varNum = 0;
    // 변수 수정함수
    const addLet = () => {
        varNum = varNum + 1;
        console.log(varNum);
    }

    // Ref 사용하기
    const refNum = useRef(0); // => 객체 {current : 0}
    // Ref 수정함수
    const addRef = () => {
        refNum.current = refNum.current + 1;
        console.log(refNum.current);
    }
    return (
        <div>
            <p>State : {stateNum}</p>
            <p>Ref : {refNum.current}</p>
            <p>Var : {varNum}</p>
            <button onClick={addState}>State + 1</button>
            {/* 리렌더링 되어도 언마운트 되기 전까지 값이 유지되므로
            state값이 변경될 때 값이 변경 */}
            <button onClick={addRef}>Ref + 1</button>
            <button onClick={addLet}>Var + 1</button>
        </div>
    );
};

export default RefSample;