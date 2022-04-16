import React from 'react';

import Card from '../Card';

import * as S from './Pipes.style';

export function Pipes() {
    return (
        <S.Container>
            <S.Grid>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </S.Grid>
        </S.Container>
    );
}