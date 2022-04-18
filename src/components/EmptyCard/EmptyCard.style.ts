import styled from 'styled-components';
import { BsPlusSquareFill } from 'react-icons/bs'

export const Container = styled.div`
    align-items: center;
    background-color: transparent;
    border-radius: 12px;
    border: 2px dashed var(--blue-400);
    bottom: 0;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 280px;
    justify-content: space-evenly;
    padding: 16px;
    position: relative;
    transition: all .2s ease-in-out;
    width: 100%;

    &:hover {
        border-color: var(--brand-base);
        bottom: 4px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        transition: all .4s cubic-bezier(0.19, 1, 0.22, 1);

        svg {
            color: var(--brand-base);
        }
    }
`

export const Button = styled.button`
    align-items: center;
    background-color: transparent;
    border: none;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
    width: 100%;
`

export const AddIcon = styled(BsPlusSquareFill)`
    color: var(--blue-400);
    height: 64px;
    width: 64px;
`

export const Label = styled.p`
    color: var(--text-500);
    font-size: 22px;
    font-weight: bold;
`