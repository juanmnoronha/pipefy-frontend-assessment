import styled from 'styled-components';

export const Container = styled.div`
    align-items: flex-start;
    display: flex;
    justify-content: flex-start;
    padding: 0 40px;
`

export const Grid = styled.div`
    display: grid;
    grid-gap: 40px;
    grid-template-columns: repeat(auto-fill, minmax(240px,1fr));
    width: 100%;
    transition: all .2s ease-in-out;
`

export const Card = styled.div``