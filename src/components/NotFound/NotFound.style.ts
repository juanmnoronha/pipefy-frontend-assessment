import styled from 'styled-components';
import { BiPlanet } from 'react-icons/bi'

export const Container = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    width: 100%;
`

export const NotFoundIcon = styled(BiPlanet)`
    color: var(--icon-base);
    height: 64px;
    margin-bottom: 16px;
    width: 64px;
`

export const Message = styled.p`
    color: var(--icon-base);
    color: var(--text-base);
    font-size: 20px;
    text-align: center;
`