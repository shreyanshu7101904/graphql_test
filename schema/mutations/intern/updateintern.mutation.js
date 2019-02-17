import { GraphQLList, GraphQLNonNull, GraphQLString, GraphQLFloat } from 'graphql';
import {
  InternType,
  InternUpdateInputType
} from '../../types/intern.type'
import { mongodb } from '../../lib/mongodb.lib'

export default {
  updateIntern: {
    type: InternType,
    description: "update intern",
    args: {
      intern: { type: InternUpdateInputType }
    },
    resolve: async function(root, { intern }) {
      const response = await mongodb.updateOne(
        "shreyanshu",
        'interns',
        intern
      );
      return response
    }
  }
};
