import React from 'react';

import * as S from './ModalCard.style';

interface ModalCardProps {
  color: string
  name: string
  title: string
}

export function ModalCard({ color, name, title }: ModalCardProps) {
  return (
    <S.Container color={color}>
      <S.Content>
        <S.Badge color={color}>{name}</S.Badge>
        <S.Title>{title}</S.Title>
      </S.Content>
    </S.Container>
  );
}
