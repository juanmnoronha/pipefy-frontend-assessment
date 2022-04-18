import React from 'react';

import * as S from './EmptyCard.style';

export function EmptyCard() {
    return (
        <S.Container>
            <S.Button>
                <S.AddIcon />
                <S.Label>Add new pipe</S.Label>            
            </S.Button>
        </S.Container>
    );
}