import React from 'react';
import { useQuery } from '@apollo/client';

import { GET_ORGANIZATION } from '../../graphql/queries/organization';
import * as S from './Pipes.style';
import Card from '../Card';
import Loading from '../Loading';
import NotFound from '../NotFound';
interface PipesProps {
    cards_count: number
    color: string
    icon: string
    id: number
    name: string
    public: boolean
}

export function Pipes() {
    const { loading, error, data } = useQuery(GET_ORGANIZATION, {
        variables: {
            id: process.env.REACT_APP_PIPEFY_ORGANIZATION_ID
        }
    });

    if (loading) return <Loading />;
    if (error) return <NotFound message={`Erro! ${error.message}`} />;

    return (
        <S.Container>
            <S.Grid>
                {data.organization.pipes.map((item: PipesProps) => (
                    <Card
                        color={item.color}
                        count={item.cards_count}
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