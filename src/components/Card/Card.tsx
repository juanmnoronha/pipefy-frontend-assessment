import React, { ReactEventHandler } from 'react';

import { TEMPLATE_ICONS_PATH } from '../../utils/constants';
import * as S from './Card.style';

interface CardProps {
  color: string
  count: number
  icon: string
  isPublic: boolean
  onClick: () => void
  onError?: ReactEventHandler
  title: string
}

export function Card({ color, title, icon, count, onClick, isPublic }: CardProps) {
  const iconPath = `${TEMPLATE_ICONS_PATH}${icon}-xl.svg`;
  const iconDefaultPath = `${TEMPLATE_ICONS_PATH}pipefy-solid-xl.svg`;

  const handleImgError = (event: any) => {
    event.target.src = iconDefaultPath
  }

  return (
    <S.Container color={color} onClick={onClick} data-testid="card">
      <S.Actions>
        {!isPublic && <S.LockIcon />}
        <S.FavoriteIcon />
      </S.Actions>
      <S.Icon src={iconPath} onError={handleImgError} alt={title} />
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Count>{count} Cards</S.Count>
      </S.Content>
    </S.Container>
  );
}