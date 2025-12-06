import { gql } from "@apollo/client";
import { COMPONENT_FRAGMENT, META_FRAGMENT } from "./Fragments";

// export const GET_PAGE_BY_SLUG = gql`
//   query GetPage($slug: String!) {
//     getPage(slug: $slug) {
//       id
//       meta {
//         id
//         name
//         slug
//         createdAt
//         updatedAt
//       }
//       components {
//         id
//         type
//         variant
//         props
//       }
//     }
//   }
// `;

export const GET_PAGE = gql`
  ${META_FRAGMENT}
  ${COMPONENT_FRAGMENT}

  query GetPage($slug: String!) {
    getPage(slug: $slug) {
      id
      meta {
        ...MetaFragment
      }
      components {
        ...ComponentFragment
      }
    }
  }
`;
