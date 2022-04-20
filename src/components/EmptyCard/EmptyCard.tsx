import React from 'react';

import * as S from './EmptyCard.style';

interface EmptyCardProps {
  label: string
}

export function EmptyCard({ label }: EmptyCardProps) {
  return (
    <S.Container>
      <S.Button>
        <S.AddIcon />
        <S.Label>{label}</S.Label>
      </S.Button>
    </S.Container>
  );
}