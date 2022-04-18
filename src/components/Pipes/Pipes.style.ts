import styled from 'styled-components';

export const Container = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 0 40px 32px;
    transition: all 2s ease-in-out;
`

export const Grid = styled.div`
    display: grid;
    grid-gap: 40px;
    grid-template-columns: repeat(auto-fill, minmax(240px,1fr));
    transition: all 2s ease-in-out;
    width: 100%;
`