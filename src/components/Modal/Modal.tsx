import React, { useCallback, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { GET_CARDS } from '../../graphql/queries/cards';
import * as S from './Modal.style';
import Loading from '../Loading';
import ModalCard from '../ModalCard';
import Button from '../Button';
import { LIMIT_CARDS } from '../../utils/constants';
import NotFound from '../NotFound';

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
  current_phase: {
    color: string
    name: string
  }
}

export function Modal({ closeModal, pipeId }: ModalProps) {
  const { loading, data, fetchMore } = useQuery(GET_CARDS, {
    variables: {
      pipeId: pipeId || '',
      first: LIMIT_CARDS
    }
  });

  const pageInfo = data?.cards.pageInfo;

  const handleShowMore = useCallback(async () => {
    if (pageInfo?.hasNextPage && pageInfo.endCursor) {
      await fetchMore({
        variables: {
          after: pageInfo.endCursor
        }
      })
    }
  }, [pageInfo, fetchMore]);

  const hasCards = data?.cards?.edges.length > 0;

  return (
    <S.Backdrop>
      <S.Container>
        <S.CloseButton onClick={closeModal}>
          <S.CloseIcon />
        </S.CloseButton>
        {loading
          ? <Loading />
          : <>
            {hasCards
              ? <>
                <S.Grid>
                  {data.cards.edges?.map((item: Cards) => (
                    <ModalCard
                      key={item.node?.id}
                      color={item.node?.current_phase.color}
                      title={item.node?.title}
                      name={item.node?.current_phase.name}
                    />
                  ))}
                </S.Grid>
                {pageInfo.hasNextPage && <Button onClick={handleShowMore} />}
              </>
              : <NotFound message='There are no cards for this query! :(' />
            }
          </>
        }
      </S.Container>
    </S.Backdrop>
  );
}