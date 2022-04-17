import React from 'react';

import { FAQ_LINK, PIPE_LINK } from '../../utils/constants';
import * as S from './Header.style';

export function Header() {
  return (
    <S.Container>
        <S.Title>
            Your pipes
            <S.Help href={FAQ_LINK} target='_blank'>
              <S.HelpIcon />
            </S.Help>
        </S.Title>
        <S.Desciption>Here are all your process <S.Link href={PIPE_LINK} target="_blank">learn more</S.Link>.</S.Desciption>
    </S.Container>
  );
}