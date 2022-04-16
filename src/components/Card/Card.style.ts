import styled from 'styled-components';
import { FiLock } from 'react-icons/fi'
import { FaRegStar } from 'react-icons/fa'

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

export const Actions = styled.div`
    display: flex;
    height: 24px;
    justify-content: space-between;
    padding: 0 16px;
    position: absolute;
    top: 16px;
    width: 100%;
`

export const LockIcon = styled(FiLock)`
    font-size: 24px;
`

export const FavoriteIcon = styled(FaRegStar)`
    font-size: 24px;
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