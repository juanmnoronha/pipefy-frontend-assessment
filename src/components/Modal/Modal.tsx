import React from 'react';
import { useQuery } from '@apollo/client';

import { GET_CARDS } from '../../graphql/queries/cards';

import * as S from './Modal.style';
import Loading from '../Loading';
import NotFound from '../NotFound';

interface ModalProps {
    pipeId: string | null
}

interface Cards {
    edges: Edge
    node: Node
}

interface Edge {
    node: Node
}

interface Node {
    created_at: string
    title: string
}

export function Modal({ pipeId }: ModalProps) {
    const { loading, error, data } = useQuery(GET_CARDS, {
        variables: {
            pipeId: pipeId || ''
        }
    });

    
    if (loading) return <Loading />;
    if (error) return <NotFound message={`Erro! ${error.message}`} />;
    
    return (
        <S.Container>
            {data.cards.edges.map((item: Cards) => (
                <p>{item.node?.title}</p>
            ))}
        </S.Container>
    );
}