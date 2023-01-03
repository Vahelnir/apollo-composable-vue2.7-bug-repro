import { gql } from "@apollo/client/core";

export const GET_SOMETHING = gql`
  query GetSomething {
    something {
      id
      hello
    }
  }
`;

export const GET_LONG_SOMETHING = gql`
  query GetLongSomething {
    longSomething {
      id
      world
    }
  }
`;
