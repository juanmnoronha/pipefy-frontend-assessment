import { gql, useQuery } from '@apollo/client';

export const GET_ORGANIZATION = gql`
  query GetOrganization($id: ID!) {
    organization(id: $id) {
      id
      name
      pipes {
        cards_count
        color
        icon
        id
        name
        public
      }
    }
  }
`;

export function useQueryOrganization(options?: any) {
  return useQuery(GET_ORGANIZATION, options)
}