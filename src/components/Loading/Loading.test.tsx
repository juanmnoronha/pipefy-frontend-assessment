import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import { Loading } from './Loading';

describe('<Loading />', () => {
  it('should render component', async () => {
    render(
      <MockedProvider mocks={[]} addTypename={false} >
        <Loading />
      </MockedProvider >
    );
    
    expect(screen.getByTestId(/loading/i)).toBeInTheDocument();    
  })
})