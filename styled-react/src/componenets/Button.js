import React from 'react';
import styled from 'styled-components';

const ButtonCom = styled.button`
        background: ${({primary}) => primary ? 'palevioletred' : 'white'};
        color: ${({primary}) => primary ? 'white' : 'palevioletred'};
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid palevioletred;
        border-radius: 3px; 
    `;
    // background: ${({ primary }) => (primary ? "palevioletred" : "white")};
    // 컴포넌트의 props를 받아와 해당 key이름이 primary인 값이 있을 때(= true)
    // "palevioletred" 색을 배경색에 적용,
    // 없을 때(= false) "white" 색을 배경색에 적용

    // TomatoButton은 ButtonCom의 스타일을 상속받음 (바꿔주고 싶은 값들만 변경!)
    const TomatoButton = styled(ButtonCom)`
        color: tomato;
        background: #fff;
    `;

const Button = () => {    
    // 단위 > 1em = 16px 정도
    return (
        <div>
            <ButtonCom>Normal</ButtonCom>
            <ButtonCom primary>Primary</ButtonCom>
            <TomatoButton>TomatoBtn</TomatoButton>
        </div>
    );
};

export default Button;