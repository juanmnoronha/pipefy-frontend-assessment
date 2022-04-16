import React from 'react';

import * as C from '../../constants';
import * as S from './Header.style';

export function Header() {
  return (
    <S.Container>
        <S.Title>
            Your pipes
            <S.Help href={C.FAQ_LINK} target='_blank'>
              <S.HelpIcon />
            </S.Help>
        </S.Title>
        <S.Desciption>Here are all your process <S.Link href={C.PIPE_LINK} target="_blank">learn more</S.Link>.</S.Desciption>
    </S.Container>
  );
}