import React from 'react';

import { TEMPLATE_ICONS_PATH } from '../../utils/constants';
import * as S from './Card.style';

interface CardProps {
  color: string
  count: number
  icon: string
  isPublic: boolean
  onClick: () => void
  title: string
}

export function Card({ color, title, icon, count, onClick, isPublic }: CardProps) {
  const iconPath = `${TEMPLATE_ICONS_PATH}${icon}-xl.svg`;

  return (
    <S.Container color={color} onClick={onClick}>
      <S.Actions>
        {!isPublic && <S.LockIcon />}
        <S.FavoriteIcon />
      </S.Actions>
      <S.Icon src={iconPath} alt='' />
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Count>{count} Cards</S.Count>
      </S.Content>
    </S.Container>
  );
}