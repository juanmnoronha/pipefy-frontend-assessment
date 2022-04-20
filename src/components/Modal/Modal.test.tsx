import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import { Modal } from './Modal';
import { GET_CARDS } from '../../graphql/queries/cards';

describe('<Modal />', () => {
  it('should render loading when starting the template', () => {
    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <Modal closeModal={jest.fn()} pipeId="301735371" />
      </MockedProvider>
    )

    expect(screen.getByRole(/loading/i)).toBeInTheDocument();
  })

  it('should render section', async () => {
    render(
      <MockedProvider mocks={[
        {
          request: {
            query: GET_CARDS,
            variables: {
              pipeId: "301735371",
              first: 4,
            }
          },
          result: {
            data: {
              cards: {
                edges: [
                  {
                    node: {
                      id: "436994995",
                      title: "Purchase",
                      current_phase: {
                        color: "yellow",
                        name: "Payment Requests ",
                        __typename: "Phase"
                      },
                      __typename: "Card"
                    },
                    __typename: "CardEdge"
                  }
                ],
                pageInfo: {
                  endCursor: "WyIyMDIxLTA3LTMwIDE2OjM0OjA0Ljg3MjgyMTAwMCBVVEMiLCIyLjAiLDQzNjk5NDk5MV0",
                  hasNextPage: true,
                  startCursor: "WyIyMDIxLTA3LTMwIDE2OjM0OjA0Ljg3MjgyMTAwMCBVVEMiLCIwLjI1Iiw0MzY5OTQ5OTVd",
                  __typename: "PageInfo"
                },
                __typename: "CardConnection"
              }
            }
          }
        }
      ]} addTypename={false} >
        <Modal closeModal={jest.fn()} pipeId="301735371" />
      </MockedProvider>
    )

    expect(screen.getByRole(/loading/i)).toBeInTheDocument();
    expect(await screen.findByText(/Purchase/i)).toBeInTheDocument();
    expect(await screen.findByRole(/button/i, { name: /Show More/i })).toBeInTheDocument();
  })
})