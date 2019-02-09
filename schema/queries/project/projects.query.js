import { GraphQLList, GraphQLNonNull, GraphQLString, GraphQLFloat } from 'graphql';
import { ProjectType } from '../../types/project.type'
import { mongodb } from '../../lib/mongodb.lib'
import GraphQLJSON from 'graphql-type-json';

export default {
  projects: {
    type: new GraphQLList(ProjectType),
    description: "get projects",
    JSON: GraphQLJSON,
    args: {
      query: { type: GraphQLJSON }
    },
    resolve: async function (root, {query}) {
      const response = await mongodb.search(
        'shreyanshu',
        'projects',
        query,
        0
      );
      return response;
    }
  }
}
