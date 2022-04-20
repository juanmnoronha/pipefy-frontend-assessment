import styled from 'styled-components';
import { BiPlanet } from 'react-icons/bi'

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`

export const NotFoundIcon = styled(BiPlanet)`
  color: var(--brand-base);
  height: 120px;
  margin-bottom: 16px;
  width: 120px;
`

export const Message = styled.p`
  color: var(--text-500);
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`