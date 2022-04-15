import React from 'react';

import { Container } from './App.style';

export function App() {
  return (
    <Container>
      <section>
        <header>
          <h1>Your pipes</h1>
          <span>Help</span>
          <p>Here are all your process <a href="/">learn more</a>.</p>
        </header>
        <div>
          <div>
            <div>
              <i>Lock</i>
              <i>Favorite</i>
              <h2>Title</h2>
              <span>
                <span>0</span>
                Cards
              </span>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
