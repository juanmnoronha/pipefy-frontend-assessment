import React from 'react';

import * as S from './EmptyCard.style';

interface EmptyCardProps {
  label: string
}

export function EmptyCard({ label }: EmptyCardProps) {
  return (
    <S.Container data-testid="empty-card">
      <S.Button>
        <S.AddIcon />
        <S.Label>{label}</S.Label>
      </S.Button>
    </S.Container>
  );
}