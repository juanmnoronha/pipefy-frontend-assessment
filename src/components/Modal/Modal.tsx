import React, { useCallback } from 'react';

import { LIMIT_CARDS } from '../../utils/constants';
import { useQueryCards } from '../../graphql/queries/cards';
import * as S from './Modal.style';
import Button from '../Button';
import Loading from '../Loading';
import ModalCard from '../ModalCard';
import NotFound from '../NotFound';
interface ModalProps {
  pipeId: string
  closeModal: () => void
}

export function Modal({ closeModal, pipeId }: ModalProps) {
  const { loading, data, fetchMore } = useQueryCards({
    variables: {
      pipeId: pipeId || '',
      first: LIMIT_CARDS,
    }
  });

  const hasCards = data?.cards?.edges?.length || [];
  const pageInfo = data?.cards?.pageInfo;

  const handleShowMore = useCallback(async () => {
    if (pageInfo?.hasNextPage && pageInfo?.endCursor) {
      await fetchMore({
        variables: {
          after: pageInfo?.endCursor
        }
      })
    }
  }, [pageInfo, fetchMore]);

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
                  {data?.cards.edges.map(item => (
                    <ModalCard
                      key={item.node?.id}
                      color={item.node?.current_phase.color}
                      title={item.node?.title}
                      name={item.node?.current_phase.name}
                    />
                  ))}
                </S.Grid>
                {pageInfo?.hasNextPage && <Button onClick={handleShowMore} />}
              </>
              : <NotFound message='There are no cards for this query! :(' />
            }
          </>
        }
      </S.Container>
    </S.Backdrop>
  );
}