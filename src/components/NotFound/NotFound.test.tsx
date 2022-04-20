import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import { NotFound } from './NotFound';

describe('<NotFound />', () => {
  it('should render component', async () => {
    render(
      <MockedProvider mocks={[]} addTypename={false} >
        <NotFound message="Mock Message" />
      </MockedProvider>
    );
    
    expect(screen.getByTestId(/not-found/i)).toBeInTheDocument();    
  })
})