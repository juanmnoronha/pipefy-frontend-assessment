import { gql, QueryHookOptions, useQuery } from '@apollo/client';

interface Cards {
  edges: Edges[]
  pageInfo: PageInfo
}

interface Edges {
  node: Node
}

interface Node {
  id: number
  title: string
  current_phase: CurrentPhase
}

interface CurrentPhase {
  color: string
  name: string
}

interface PageInfo {
  endCursor: string
  hasNextPage: boolean
  startCursor: string
}

interface CardsData {
  cards: Cards
}

interface CardsVars {
  pipeId: string
  first: number
  after?: string
}

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

export function useQueryCards(options?: QueryHookOptions<CardsData, CardsVars>) {
  return useQuery<CardsData, CardsVars>(GET_CARDS, options)
}