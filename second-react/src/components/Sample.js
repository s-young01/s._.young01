import React, { useState } from "react";

const Sample = () => {
    // names에는 아래의 객체들의 상태가 담겨져있다 
    // setNames는 names의 상태를 업데이트 해주는 함수가 담겨져있다
    const [names, setNames] = useState([
        {
            id: 1,
            text: "귤"
        },
        {
            id: 2,
            text: "팥빙수"
        },
        {
            id: 3,
            text: "눈"
        },
        {
            id: 4,
            text: "붕어빵"
        }
    ])

    // input 상태관리
    // inpuText에는 input의 상태가 담겨져있다 (빈 문자열이 기본 상태)
    // setInputText에는 input의 상태를 업데이트 해주는 함수가 담겨져있다
    const [inputText, setInputText] = useState("");

    // id 상태관리
    // nextId에는 names.id의 값이 5인 상태가 담겨져있다
    // setNextId에는 nextId의 상태를 업데이트 해주는 함수가 담겨져있다 
    const [nextId, setNextId] = useState(5);

    // 이벤트 연결
    // 이벤트 발생 시 input의 값이 변경되는 함수
    // 이 때 input의 상태 업데이트 함수를 호출
    const onChange = (e) => setInputText(e.target.value);

    // 추가 버튼 클릭했을 때 
    const onClick = () => {
        // nextNames 변수 안에 객체가 담긴 배열을 담아줌
        const nextNames = [
            // 기존 names객체에
            ...names,
            // id 값이 nextId, text 값이 inputText인 객체를 덮어씌워줌
            {
                id: nextId,
                text: inputText
            }
        ];
        // 클릭 했을 때의 상태 업데이트
        setInputText(""); // inputText를 다시 빈 문자열 상태로 업데이트
        setNames(nextNames);  // names 상태 업데이트
        setNextId(nextId + 1) // 기존 nextId값에 1을 더한 값으로 업데이트
    }

    // 삭제 버튼 클릭했을 때
    const onRemove = () => {
        // id 값이 3이면 id 값이 3이 아닌 id 값을 가지고 있는 친구들을 배열로 담아줌
        const nextNames = names.filter(name => name.id !== id);
        // 클릭 했을 때의 상태 업데이트
        setNames(nextNames); // names 상태 업데이트
    }

    // li들을 배열로 돌려서 화면에 출력해보자
    // map을 쓸 때는 key값을 줘야하는데, 이유는
    // li의 순서를 알 수 있도록 고유한 key값을 지정해준다
    const namelist = names.map((name, index) => 
    <li key={index}>{name.text}
    {/* 전달할 id 값이 있어서 함수 자체를 중괄호 안에 넣어줌 */}
    <button onRemove={() => onRemove(name.id)}>삭제</button>
    </li>);
    return (
        <div>
            <input value={inputText} onChange={onChange}/><button onClick={onClick}>추가</button>
            <ul>
                {namelist}
            </ul>
        </div>
    )
}

export default Sample;