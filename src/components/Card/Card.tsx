import React from 'react';

import { TEMPLATE_ICONS_PATH } from '../../utils/constants';
import * as S from './Card.style';

interface CardProps {
    count: number
    color: string
    icon: string
    isPublic: boolean
    title: string
    onClick: () => void
}

export function Card({ color, title, icon, count, onClick, isPublic }: CardProps) {
    return (
        <S.Container color={color} onClick={onClick}>
            <S.Actions>
                {!isPublic && <S.LockIcon />}
                <S.FavoriteIcon />
            </S.Actions>
            <S.Icon src={`${TEMPLATE_ICONS_PATH}${icon}-xl.svg`} alt='' />
            <S.Content>
                <S.Title>{title}</S.Title>
                <S.Count>{count} Cards</S.Count>
            </S.Content>
        </S.Container>
    );
}