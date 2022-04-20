import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background-color: var(--white);
  border-radius: 12px;
  bottom: 0;
  display: flex;
  flex-direction: column;
  height: 230px;
  justify-content: center;
  padding: 16px;
  position: relative;
  transition: all .2s ease-in-out;
  width: 100%;
`

export const Content = styled.div``

export const Title = styled.h2`
  color: var(--text-base);
  font-size: 20px;
  text-align: center;
`

export const Badge = styled.div`
  align-items: center;
  background-color: var(--${props => props.color}-400);
  border-radius: 20px;
  display: flex;
  font-size: 12px;
  font-weight: bold;
  height: 24px;
  justify-content: center;
  left: 24px;
  padding: 0px 16px;
  position: absolute;
  top: 24px;
`