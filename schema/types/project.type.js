import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLNonNull
} from "graphql";


export const ProjectType = new GraphQLObjectType({
  name: "ProjectType",
  description: "project type",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLString) },
    project_name: { type: GraphQLString },
    project_description: { type: GraphQLString },
    start_date: { type: GraphQLString },
    end_date: { type: GraphQLString },
    leader: { type: GraphQLString },
    members: { type: GraphQLString },
    progress_rate: { type: GraphQLString },
    ts_update: {type: GraphQLString},
    ts_create: {type: GraphQLString},
  })
});


export const ProjectInputType = new GraphQLInputObjectType ({
  name: "ProjectInputType",
  description: "input project",
  fields: () => ({
    project_name: { type: new GraphQLNonNull(GraphQLString) },
    project_description: { type: new GraphQLNonNull(GraphQLString) },
    start_date: { type: GraphQLString },
    end_date: { type: GraphQLString },
    leader: { type: GraphQLString },
    members: { type: GraphQLString },
    progress_rate: { type: GraphQLString },
  })
});


export const ProjectUpdateInputType = new GraphQLInputObjectType ({
  name: "ProjectUpdateInputType",
  description: "update project",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLString) },
    project_name: { type: GraphQLString },
    project_description: { type: GraphQLString },
    start_date: { type: GraphQLString },
    end_date: { type: GraphQLString },
    leader: { type: GraphQLString },
    members: { type: GraphQLString },
    progress_rate: { type: GraphQLString },
  })
});
