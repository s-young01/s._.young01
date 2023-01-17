import React, {useRef, useState} from 'react';

const DomRefSample = () => {
    // input의 상태관리
    const [name, setName] = useState("");
    // inputRef라는 객체 생성
    const inputRef = useRef();
    // 버튼 클릭했을 때 초기화 해주는 함수
    const onReset = () => {
        // input의 상태 업데이트
        setName("");
        // 자바스크립트 작성법 : document.querySelector('#inputname').focus();
        inputRef.current.focus(); // 위 구문과 같은 작용을 함
    }
    return (
        <div>
            {/* inputRef 객체의 current에는 input 요소의 레퍼런스가 저장됨! */}
            <input value={name} id='inputname' ref={inputRef}
            // 이벤트가 발생될 때 input의 상태 업데이트
            onChange={(e) => setName(e.target.value)}/>
            <button onClick={onReset}>초기화</button>
        </div>
    );
};

export default DomRefSample;