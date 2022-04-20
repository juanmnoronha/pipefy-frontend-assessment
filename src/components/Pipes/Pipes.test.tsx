import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import { GET_ORGANIZATION } from '../../graphql/queries/organization';
import { Pipes } from './Pipes';

describe('<Pipes />', () => {
  it('should render loading when starting the template', () => {
    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <Pipes />
      </MockedProvider>
    )

    expect(screen.getByRole(/loading/i)).toBeInTheDocument();
  })
  
  it('should render section', async () => {
    render(
      <MockedProvider mocks={[
        {
          request: {
            query: GET_ORGANIZATION,
            variables: { 
              id: "300562393" 
            }
          },
          result: {
            data: {
              organization: {
                id: "300562393",
                name: "Pipefy FrontEnd - Assessment",
                pipes: [
                  {
                    cards_count: 6,
                    color: "blue",
                    icon: "mac",
                    id: "301735351",
                    name: "IT Service Desk ",
                    public: true,
                    __typename: "Pipe"
                  }
                ],
                __typename: "Organization"
              }
            }
          }
        }
      ]} addTypename={false} >
        <Pipes />
      </MockedProvider >
    )

    expect(screen.getByRole(/loading/i)).toBeInTheDocument();
    expect(await screen.findByText(/IT Service Desk/i)).toBeInTheDocument();
  })
})