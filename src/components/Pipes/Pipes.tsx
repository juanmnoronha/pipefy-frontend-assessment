import React from 'react';
import { useQuery } from '@apollo/client';

import { GET_ORGANIZATION } from '../../graphql/queries/organization';
import * as S from './Pipes.style';
import Card from '../Card';
import Loading from '../Loading';
import NotFound from '../NotFound';
import EmptyCard from '../EmptyCard';
import { sortDataByName } from '../../utils/sort';

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
    
    const sortedData = data.organization.pipes?.map((item: PipesProps) => item)
        .sort((a: PipesProps, b: PipesProps) => a.name.trim().localeCompare(b.name.trim()))

    return (
        <S.Container>
            <S.Grid>
                {sortedData?.map((item: PipesProps) => (
                    <Card
                        color={item.color}
                        count={item.cards_count}
                        icon={item.icon}
                        isPublic={item.public}
                        key={item.id}
                        title={item.name}
                    />
                ))}
                <EmptyCard label="Add new pipe" />
            </S.Grid>
        </S.Container>
    );
}