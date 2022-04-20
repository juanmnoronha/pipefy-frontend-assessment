import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import { EmptyCard } from './EmptyCard';

describe('<EmptyCard />', () => {
  it('should render component', async () => {
    render(
      <MockedProvider mocks={[]} addTypename={false} >
        <EmptyCard label="Mock Label" />
      </MockedProvider>
    );
    
    expect(screen.getByTestId(/empty-card/i)).toBeInTheDocument();    
  })
})