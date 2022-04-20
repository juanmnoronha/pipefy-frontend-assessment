import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import { Button } from './Button';

describe('<Button />', () => {
  it('should render component', async () => {
    render(
      <MockedProvider mocks={[]} addTypename={false} >
        <Button onClick={jest.fn()} />
      </MockedProvider>
    );
    
    expect(screen.getByRole(/button/i)).toBeInTheDocument();    
  })
})