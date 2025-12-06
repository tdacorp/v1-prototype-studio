import { gql } from "@apollo/client";

export const META_FRAGMENT = gql`
  fragment MetaFragment on PageMeta {
    id
    name
    slug
    createdAt
    updatedAt
  }
`;

export const COMPONENT_FRAGMENT = gql`
  fragment ComponentFragment on Component {
    id
    type
    variant
    props
  }
`;
