import React from 'react';
import styled from 'styled-components';

import Header from './components/Header';

import GlobalStyle from './styles/global';

export const Container = styled.section``
export const Title = styled.h1``
export const Description = styled.p``
export const Help = styled.span``
export const Pipes = styled.div``
export const Card = styled.div``

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Pipes>
          <Card>
            <i>Lock</i>
            <i>Favorite</i>
            <div>
              <h2>Title</h2>
              <span>
                <span>0</span>
                Cards
              </span>
            </div>
          </Card>
          <Card>
            <i>Lock</i>
            <i>Favorite</i>
            <div>
              <h2>Title</h2>
              <span>
                <span>0</span>
                Cards
              </span>
            </div>
          </Card>
          <Card>
            <i>Lock</i>
            <i>Favorite</i>
            <div>
              <h2>Title</h2>
              <span>
                <span>0</span>
                Cards
              </span>
            </div>
          </Card>
          <Card>
            <i>Lock</i>
            <i>Favorite</i>
            <div>
              <h2>Title</h2>
              <span>
                <span>0</span>
                Cards
              </span>
            </div>
          </Card>
        </Pipes>
      </Container>
    </>
  );
}
