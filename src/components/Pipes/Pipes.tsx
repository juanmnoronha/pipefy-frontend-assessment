import React, { useCallback, useState } from 'react';

import { useQueryOrganization } from '../../graphql/queries/organization';
import * as S from './Pipes.style';
import Card from '../Card';
import EmptyCard from '../EmptyCard';
import Loading from '../Loading';
import Modal from '../Modal';
import NotFound from '../NotFound';


export function Pipes() {
  const { loading, error, data } = useQueryOrganization({
    variables: {
      id: process.env.REACT_APP_PIPEFY_ORGANIZATION_ID || ''
    }
  });

  const [openModal, setOpenModal] = useState(false);
  const [currentPipeId, setCurrentPipeId] = useState('');

  const handleClickCard = useCallback(
    (id) => {
      setOpenModal(true)
      setCurrentPipeId(id)
    },
    [setOpenModal, setCurrentPipeId],
  );

  const handleCloseModal = useCallback(() => {
    setOpenModal(false)
  }, [setOpenModal])

  if (loading) return <Loading />;
  if (error) return <NotFound message={`Erro! ${error.message}`} />;

  const sortedData = data?.organization?.pipes?.map(item => item)
    .sort((a, b) => a.name.trim().localeCompare(b.name.trim()))

  return (
    <S.Container data-testid="pipes">
      <S.Grid>
        {sortedData?.map(item => (
          <Card
            color={item.color}
            count={item.cards_count}
            icon={item.icon}
            isPublic={item.public}
            key={item.id}
            title={item.name}
            onClick={() => handleClickCard(item.id)}
          />
        ))}
        <EmptyCard label="Add new pipe" />
      </S.Grid>
      {openModal && (
        <Modal closeModal={handleCloseModal} pipeId={currentPipeId} />
      )}
    </S.Container>
  );
}