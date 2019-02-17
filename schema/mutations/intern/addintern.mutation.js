import { GraphQLList, GraphQLNonNull, GraphQLString, GraphQLFloat } from 'graphql';
import {
  InternType,
  InternInputType
} from '../../types/intern.type'
import { mongodb } from '../../lib/mongodb.lib'

export default {
  addIntern: {
    type: InternType,
    description: "add new intern",
    args: {
      intern: { type: InternInputType }
    },
    resolve: async function(root, { intern }) {
      const response  = await mongodb.addOne(
        "shreyanshu",
        'interns',
        intern
      );
      return response
    }
  }
};
