import { GraphQLList, GraphQLNonNull, GraphQLString, GraphQLFloat } from 'graphql';
import { InternType } from '../../types/intern.type'
import { mongodb } from '../../lib/mongodb.lib'

export default {
  intern: {
    type: InternType,
    description: "Get a specific intern",
    args: {
        id: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve: async function (parent, {id}) {
      const response = await mongodb.findByID(
          'shreyanshu',
          'interns',
          id
        );
      return response
    }
  }
}