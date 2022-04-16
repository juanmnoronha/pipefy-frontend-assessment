import React from 'react';

import * as S from './Card.style';

export function Card() {
    return (
        <S.Container>
            <S.Actions>
                <S.LockIcon />
                <S.FavoriteIcon />
            </S.Actions>
            <S.Content>
                <S.Title>Title</S.Title>
                <S.Count>0 Cards</S.Count>
            </S.Content>
        </S.Container>
    );
}