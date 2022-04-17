import styled from 'styled-components';
import { FiLock } from 'react-icons/fi'
import { AiFillStar } from 'react-icons/ai'

export const Container = styled.div`
    align-items: center;
    background-color: ${props => props.color};
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
    color: #83949d;
    display: flex;
    font-size: 24px;
    justify-self: flex-start;
`

export const FavoriteIcon = styled(AiFillStar)`
    color: transparent;
    cursor: pointer;
    display: flex;
    font-size: 24px;
    justify-self: flex-end;
    stroke-width: 80px;
    stroke: #83949d;

    &:hover {
        color: #f4ad3d;
        stroke: #f4ad3d;
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
    color: #11181f;
    font-size: 24px;
    text-align: center;
`

export const Count = styled.span`
    font-size: 18px;
    color: #4d616e;
    text-align: center;
`