import { GraphQLList, GraphQLNonNull, GraphQLString, GraphQLFloat } from 'graphql';
import { InternType } from '../../types/intern.type'
import { mongodb } from '../../lib/mongodb.lib'
import GraphQLJSON from 'graphql-type-json';

export default {
  interns: {
    type: new GraphQLList(InternType),
    description: "get interns",
    JSON: GraphQLJSON,
    args: {
      query: { type: GraphQLJSON }
    },
    resolve: async function (root, {query}) {
      const response = await mongodb.search(
        'shreyanshu',
        'interns',
        query,
        0
      );
      return response;
    }
  }
}
