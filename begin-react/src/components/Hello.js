import React from "react";

function Hello({name, message, isSpecial}) {
    return (
    <>
        {/* name 변수를 쓰고 싶을 때 중괄호로 감싸준다 ! */}
        {/* 클래스 주고 싶을 때 => calssName="이름" */}
        <div className="hello">
            {/* 조건문 랜더링 => if문 쓸 수 없음, 삼항연산자 사용해야 함 !! */}
            {isSpecial ? <b>*</b> : null}
            {/* &&연산자 사용하면 false일 때의 값을 안줘도 됨 */}
            {isSpecial && <b>*</b>}
            {name}님 안녕하세요.
        </div> 
        <p>{message}</p>
    </>
    )
        
}
// 컴포넌트명.defaultProps : props의 기본 값 설정
Hello.defaultProps = {
    name: "이름",
    message: "반가워"
}

// export default - : 내보내기
export default Hello;