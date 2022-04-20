import { gql } from '@apollo/client';

export const GET_CARDS = gql`
  query GetCards($pipeId: ID!) {
    cards(pipe_id: $pipeId) {
      edges {
        node {
          id
          created_at
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