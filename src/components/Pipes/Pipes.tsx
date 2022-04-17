import React from 'react';
import { useQuery } from '@apollo/client';

import { GET_ORGANIZATION } from '../../graphql/queries/organization';// import Card from '../Card';
import * as S from './Pipes.style';
import Card from '../Card';
interface PipesProps {
    cards_count: number
    color: string
    icon: string
    id: number
    name: string
    public: boolean
}

export function Pipes(): any {
    const { loading, error, data } = useQuery(GET_ORGANIZATION, {
        variables: {
            id: process.env.REACT_APP_PIPEFY_ORGANIZATION_ID
        }
    });

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <S.Container>
            <S.Grid>
                {data.organization.pipes.map((item: PipesProps) => (
                    <Card
                        cards_count={item.cards_count}
                        color={item.color}
                        icon={item.icon}
                        isPublic={item.public}
                        key={item.id}
                        title={item.name}
                    />
                ))}
            </S.Grid>
        </S.Container>
    );
}