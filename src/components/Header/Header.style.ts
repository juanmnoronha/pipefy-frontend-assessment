import styled from 'styled-components';
import { IoIosHelpCircle } from 'react-icons/io'

export const Container = styled.header`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px 40px;
  position: relative;
`

export const Title = styled.h1`
  align-items: center;
  color: var(--text-base);
  display: flex;
  font-size: 24px;
  font-weight: bold;
  line-height: 1.5;
  margin-bottom: 8px;
`

export const Help = styled.a`
  display: flex;
  margin-left: 4px;
  place-content: center;
`

export const HelpIcon = styled(IoIosHelpCircle)`
  color: var(--icon-base);
`

export const Desciption = styled.p`
  color: var(--text-500);
  font-size: 16px;
  line-height: 1.5;
`

export const Link = styled.a`
  color: var(--brand-base);
  text-decoration: none;
`
