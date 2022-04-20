import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import { Header } from './Header';

describe('<Header />', () => {
  it('should render component', async () => {
    render(
      <MockedProvider mocks={[]} addTypename={false} >
        <Header />
      </MockedProvider >
    );
    
    expect(screen.getByTestId(/header/i)).toBeInTheDocument();    
  })
})