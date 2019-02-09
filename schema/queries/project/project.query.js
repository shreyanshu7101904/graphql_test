import { GraphQLList, GraphQLNonNull, GraphQLString, GraphQLFloat } from 'graphql';
import { ProjectType } from '../../types/project.type'
import { mongodb } from '../../lib/mongodb.lib'

export default {
  project: {
    type: ProjectType,
    description: "Get a specific project",
    args: {
        id: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve: async function (parent, {id}) {
      const response = await mongodb.findByID(
          'shreyanshu',
          'projects',
          id
        );
      return response
    }
  }
}
