import styled from 'styled-components';

export const Container = styled.div`
    align-items: center;
    background-color: #eaf1fe;
    border-radius: 12px;
    display: flex;
    height: 280px;
    justify-content: center;
    padding: 16px;
    position: relative;
    width: 100%;
`

export const Lock = styled.button`
    position: absolute;
    left: 16px;
    top: 16px;
`

export const Favorite = styled.button`
    position: absolute;
    right: 16px;
    top: 16px;
`

export const Content = styled.div`
    align-items: center;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    width: 100%;
`

export const Title = styled.h2`
    color: #11181f;
    font-size: 20px;
    margin-bottom: 16px;
    text-align: center;
`

export const Count = styled.span`
    font-size: 16px;
    color: #4d616e;
    text-align: center;
`