import React from 'react';
import { useQuery } from '@apollo/client';

import { GET_CARDS } from '../../graphql/queries/cards';
import * as S from './Modal.style';
import Loading from '../Loading';

interface ModalProps {
  pipeId: string | null
  closeModal: () => void
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
  id: number
}

export function Modal({ closeModal, pipeId }: ModalProps) {
  const { loading, data } = useQuery(GET_CARDS, {
    variables: {
      pipeId: pipeId
    }
  });

  return (
    <S.Backdrop>
      <S.Container>
        <S.CloseButton onClick={closeModal}>
          <S.CloseIcon />
        </S.CloseButton>
        {loading
          ? <Loading />
          : data.cards.edges.map((item: Cards) => (
            <div key={item.node?.id}>
              <h3>{item.node?.title}</h3>
              <strong>{item.node?.id}</strong>
              <small>{item.node?.created_at}</small>
            </div>
          ))
        }
      </S.Container>
    </S.Backdrop>
  );
}