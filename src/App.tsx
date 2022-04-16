import React from 'react';

import Header from './components/Header';
import Pipes from './components/Pipes';

import GlobalStyle from './styles/global';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Pipes />
    </>
  );
}
