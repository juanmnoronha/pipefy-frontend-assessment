import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io'

export const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, .4);
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
`

export const Container = styled.div`
  align-items: center;
  background-color: var(--neutral-200);
  border-radius: 12px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  height: 90%;
  justify-content: center;
  left: 50%;
  padding: 48px;
  position: relative;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all .2s ease-in-out;
  width: 90%;
`

export const Grid = styled.div`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(auto-fill, minmax(240px,1fr));
  margin-bottom: 32px;
  overflow-x: hidden;
  overflow-y: auto;
  transition: all 2s ease-in-out;
  width: 100%;
`

export const CloseButton = styled.button`
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  height: 40px;
  justify-content: center;
  position: absolute;
  right: 8px;
  top: 8px;
  width: 40px;
`

export const CloseIcon = styled(IoMdClose)`
  height: 40px;
  width: 40px;
`
