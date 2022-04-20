import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import { ModalCard } from './ModalCard';

describe('<ModalCard />', () => {
  it('should render section', async () => {
    render(
      <MockedProvider mocks={[]} addTypename={false} >
        <ModalCard 
          key={10}
          color="red"
          title="Mock Title"
          name="Mock Name"
        />
      </MockedProvider>
    );
    
    expect(screen.getByTestId(/modal-card/i)).toBeInTheDocument();    
  })
})