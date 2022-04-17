import React from 'react';

import { TEMPLATE_ICONS_PATH } from '../../utils/constants';
import * as S from './Card.style';

interface CardProps {
    title: string
    cards_count: number
    color: string
    isPublic: boolean
    icon: string
}

export function Card({ color, title, icon, cards_count, isPublic }: CardProps) {
    return (
        <S.Container color={color}>
            <S.Actions>
                {isPublic && <S.LockIcon />}
                <S.FavoriteIcon />
            </S.Actions>
            <S.Icon src={`${TEMPLATE_ICONS_PATH}${icon}-xl.svg`} alt='' />
            <S.Content>
                <S.Title>{title}</S.Title>
                <S.Count>{cards_count} Cards</S.Count>
            </S.Content>
        </S.Container>
    );
}