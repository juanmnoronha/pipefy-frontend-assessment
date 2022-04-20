import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import { Card } from './Card';

describe('<Card />', () => {
  it('should render component', async () => {
    render(
      <MockedProvider mocks={[]} addTypename={false} >
        <Card />
      </MockedProvider >
    );
    
    expect(screen.getByTestId(/card/i)).toBeInTheDocument();    
  })
})