import { createModule, createApplication, gql } from "graphql-modules";

const module = createModule({
  id: "my-module",
  typeDefs: gql`
    type Post {
      id: ID
      title: String
      author: User
    }

    type Query {
      posts: [Post]
    }
  `,
  resolvers: {
    Query: {
      posts: () => [
        {
          id: "1",
          title: "My first post",
        },
      ],
    },
  },
});

const application = createApplication({
  modules: [module],
});
