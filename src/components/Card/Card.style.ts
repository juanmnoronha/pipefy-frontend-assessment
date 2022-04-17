import styled from 'styled-components';
import { FiLock } from 'react-icons/fi'
import { AiFillStar } from 'react-icons/ai'

export const Container = styled.div`
    align-items: center;
    background-color: var(--${props => props.color}-400);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    height: 280px;
    justify-content: center;
    padding: 16px;
    position: relative;
    width: 100%;
`

export const Actions = styled.div`
    height: 32px;
    position: relative;
    width: 100%;
`

export const LockIcon = styled(FiLock)`
    color: var(--icon-base);
    font-size: 24px;
    left: 0;
    position: absolute;
`

export const FavoriteIcon = styled(AiFillStar)`
    color: transparent;
    cursor: pointer;
    font-size: 24px;
    position: absolute;
    right: 0;
    stroke-width: 80px;
    stroke: var(--icon-base);

    &:hover {
        color: var(--yellow-base);
        stroke: var(--yellow-base);
    }
`

export const Content = styled.div`
    align-items: center;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
    padding: 0 8px;
    width: 100%;
`

export const Icon = styled.img`
    height: 60px;
    width: 60px;
`

export const Title = styled.h2`
    color: var(--text-base);
    font-size: 22px;
    text-align: center;
`

export const Count = styled.span`
    color: var(--text-500);
    font-size: 18px;
    text-align: center;
`