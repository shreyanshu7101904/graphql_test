import { GraphQLList, GraphQLNonNull, GraphQLString, GraphQLFloat } from 'graphql';
import {
  ProjectType,
  ProjectInputType
} from '../../types/project.type'
import { mongodb } from '../../lib/mongodb.lib'

export default {
  addProject: {
    type: ProjectType,
    description: "add new project",
    args: {
      project: { type: ProjectInputType }
    },
    resolve: async function(root, { project }) {
      const response  = await mongodb.addOne(
        "shreyanshu",
        'projects',
        project
      );
      return response
    }
  }
};
