import { gql, QueryHookOptions, useQuery } from '@apollo/client';

interface Organization {
  id: number
  name: string
  pipes: Pipes[]
}

interface Pipes {
  cards_count: number
  color: string
  icon: string
  id: number
  name: string
  public: boolean
}

interface OrganizationData {
  organization: Organization
}

interface OrganizationVars {
  id: string
}

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

export function useQueryOrganization(options?: QueryHookOptions<OrganizationData, OrganizationVars>) {
  return useQuery<OrganizationData, OrganizationVars>(GET_ORGANIZATION, options)
}