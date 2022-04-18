import React, { ReactNode } from 'react';

import * as S from './NotFound.style';

interface NotFoundProps {
  children?: ReactNode
}

export function NotFound({ children }: NotFoundProps) {
  return (
    <S.Container>
      <S.NotFoundIcon />
      <S.Message>{children}</S.Message>
    </S.Container>
  );
}