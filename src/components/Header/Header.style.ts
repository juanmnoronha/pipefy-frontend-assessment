import styled from 'styled-components';

export const Container = styled.header`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 32px 40px;
    position: relative;
`

export const Title = styled.h1`
    align-items: center;
    display: flex;
    font-size: 24px;
    font-weight: bold;
    line-height: 1.5;
    margin-bottom: 8px;
`

export const Help = styled.button`
    background-color: #83949d;
    border-radius: 50%;
    border: none;
    color: #fff;
    font-size: 16px;
    height: 24px;
    margin-left: 8px;
    width: 24px;
`

export const Desciption = styled.p`
    color: #4d616e;
    font-size: 16px;
    line-height: 1.5;
`

export const Link = styled.a`
    color: #266af6;
    text-decoration: none;
`
