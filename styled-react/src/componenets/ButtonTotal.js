import React from 'react';
import styled, { css } from 'styled-components';

const ButtonTotal = ({children, color, size}) => {
    const StyledButton = styled.button`
        /* 공통스타일 */
        display: inline-flex;
        justify-content: center;
        outline: 0;
        border: 0;
        border-radius: 4px;
        color: white;
        font-weight: bold;
        cursor: pointer;
        padding: 1em;
        margin: 1em;

        /* 크기 지정 */
        font-size: 1em;

        /* 색상 지정 */
        ${({theme, color}) => {
            const selected = theme.palette[color];
            return css`
                background: ${selected};
            `;
        }}

        /* 크기 스타일 */
        ${({size}) => {
            return size === 'large' &&
            css`
                width: 40%
                height: 3em;
                font-size: 1.25em;
            `;
        }}
        ${({size}) => {
            return size === 'midium' &&
            css`
                width: 25%
                height: 2.25em;
                font-size: 1em;
            `;
        }}
        ${({size}) => {
            return size === 'small' &&
            css`
                width: 15%
                height: 1.75em;
                font-size: 0.75em;
            `;
        }}

        &:hover {
            background: #1c7ed6;
        }
        & + & {
            margin-left: 1em;
        }
    `;
    return (
        <StyledButton color={color} size={size}>{children}</StyledButton>
    );
};

ButtonTotal.defaultProps = {
    color: 'blue',
    size: 'medium'
}

export default ButtonTotal;