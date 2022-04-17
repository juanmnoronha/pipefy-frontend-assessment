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
    display: flex;
    height: 24px;
    justify-content: space-between;
    position: relative;
    width: 100%;
`
export const Icon = styled.img`
    height: 60px;
    width: 60px;
`

export const LockIcon = styled(FiLock)`
    color: var(--icon-base);
    font-size: 24px;
`

export const FavoriteIcon = styled(AiFillStar)`
    color: transparent;
    cursor: pointer;
    font-size: 24px;
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
    width: 100%;
`

export const Title = styled.h2`
    color: var(--text-base);
    font-size: 24px;
    text-align: center;
`

export const Count = styled.span`
    font-size: 18px;
    color: var(--text-500);
    text-align: center;
`