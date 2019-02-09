import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLNonNull
} from "graphql";


export const ProjectType = new GraphQLObjectType({
  name: "ProjectType",
  description: "restuarant customer type",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLString) },
    first_name: { type: GraphQLString },
    last_name: { type: GraphQLString },
    phone_number: { type: GraphQLString },
    email_address: { type: GraphQLString },
    ts_create: {type: GraphQLString},
    ts_update: {type: GraphQLString},
  })
});


export const ProjectInputType = new GraphQLInputObjectType ({
  name: "ProjectInputType",
  description: "input Customer",
  fields: () => ({
    first_name: { type: new GraphQLNonNull(GraphQLString) },
    last_name: { type: new GraphQLNonNull(GraphQLString) },
    phone_number: { type: GraphQLString },
    email_address: { type: GraphQLString },
  })
});


export const CustomerUpdateInputType = new GraphQLInputObjectType ({
  name: "CustomerUpdateInputType",
  description: "update Customer",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLString) },
    first_name: { type: GraphQLString },
    last_name: { type: GraphQLString },
    phone_number: { type: GraphQLString },
    email_address: { type: GraphQLString },
  })
});
