import { gql } from "@apollo/client";

export const GET_PAGE = gql`
  query GetPage($pageId: String!) {
    page(pageId: $pageId) {
      pageId
      meta {
        title
        description
      }
      sections {
        component
        props {
          title
          subtitle
          ctaLabel
          ctaLink
          image
          buttonLabel
          buttonLink
          items {
            icon
            title
            description
            image
            role
            name
            quote
          }
        }
      }
    }
  }
`;
