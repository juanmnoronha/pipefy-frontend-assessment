import React from 'react';

import * as S from './Header.style';

export function Header() {
  return (
    <S.Container>
        <S.Title>
            Your pipes
            <S.Help>?</S.Help>
        </S.Title>
        <S.Desciption>Here are all your process <S.Link href="/">learn more</S.Link>.</S.Desciption>
    </S.Container>
  );
}