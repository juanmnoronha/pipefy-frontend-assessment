import React from 'react';

import * as S from './NotFound.style';

interface NotFoundProps {
  message: string
}

export function NotFound({ message }: NotFoundProps) {
  return (
    <S.Container>
      <S.NotFoundIcon />
      <S.Message>{message}</S.Message>
    </S.Container>
  );
}