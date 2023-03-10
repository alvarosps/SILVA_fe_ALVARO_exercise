import styled from 'styled-components';

export const HeaderContainer = styled.div`
    background-color: #191970;
    display: flex;
    align-items: center;
    height: 60px;
    padding: 0 20px;
    box-sizing: border-box;
    justify-content: center;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    color: #87cefa;
`;

export const HeaderTitleContainer = styled.h1`
    font-size: 22px;
    font-family: Verdana;
    text-transform: uppercase;
`;

export const HeaderSubtitleContainer = styled.h3`
    font-size: 16px;
    text-align: center;
    margin-top: 20px;
`;

export const HeaderBackButton = styled.button`
    background: transparent;
    border: 0;
    padding: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
    position: fixed;
    left: 0;
`;
