import { gql, useQuery } from '@apollo/client';

export const GET_CARDS = gql`
  query GetCards($pipeId: ID!, $first: Int, $after: String) {
    cards(pipe_id: $pipeId, first: $first, after: $after) {
      edges {
        node {
          id
          title
          current_phase {
            color
            name
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        startCursor
      }
    }
  }
`;

export function useQueryCards(options?: any) {
  return useQuery(GET_CARDS, options)
}