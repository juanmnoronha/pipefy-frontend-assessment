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
  background-color: var(--white);
  border-radius: 12px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  height: 90%;
  left: 50%;
  position: relative;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all .2s ease-in-out;
  width: 90%;
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
  right: 16px;
  top: 16px;
  width: 40px;
`

export const CloseIcon = styled(IoMdClose)`
  height: 40px;
  width: 40px;
`
