import React from 'react';

import * as S from './Card.style';

export function Card() {
    return (
        <S.Container>
            <S.Lock />
            <S.Favorite />
            <S.Content>
                <S.Title>Title</S.Title>
                <S.Count>0 Cards</S.Count>
            </S.Content>
        </S.Container>
    );
}