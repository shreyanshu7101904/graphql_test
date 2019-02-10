import { GraphQLList, GraphQLNonNull, GraphQLString, GraphQLFloat } from 'graphql';
import {
  ProjectType,
  ProjectUpdateInputType
} from '../../types/project.type'
import { mongodb } from '../../lib/mongodb.lib'

export default {
  updateProject: {
    type: ProjectType,
    description: "update project",
    args: {
      project: { type: ProjectUpdateInputType }
    },
    resolve: async function(root, { project }) {
      const response = await mongodb.updateOne(
        "shreyanshu",
        'projects',
        project
      );
      return response
    }
  }
};
