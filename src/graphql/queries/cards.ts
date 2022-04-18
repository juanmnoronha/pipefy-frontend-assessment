import { gql } from '@apollo/client';

export const GET_CARDS = gql`
  query GetCards($pipeId: ID!) {
    cards(pipe_id: $pipeId) {
        edges {
            node {
                id
                created_at
                due_date
                title
            }
            labels {
                name
                color
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