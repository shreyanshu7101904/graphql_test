import {
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLFloat,
    GraphQLNonNull,
    GraphQLList
  } from "graphql";

  
  
  export const InternType = new GraphQLObjectType({
    name: "InternType",
    description: "intern type",
    fields: () => ({
      id: { type: new GraphQLNonNull(GraphQLString) },
      applying_date: { type: GraphQLString },
      applied_from: { type: GraphQLString },
      name: { type: GraphQLString },
      contact: { type: GraphQLString },
      email: { type: GraphQLString },
      location: { type: GraphQLString },
      skills: { type: GraphQLString },
      hobbies: { type: GraphQLString },
      cv: { type: GraphQLString },
      status: { type: GraphQLString },
      rank: { type: GraphQLString },
      remark: { type: GraphQLString },
      ts_update: {type: GraphQLString},
      ts_create: {type: GraphQLString},
    })
  });
  
  
  export const InternInputType = new GraphQLInputObjectType ({
    name: "InternInputType",
    description: "input intern",
    fields: () => ({
      applying_date: { type: GraphQLString },
      applied_from: { type: GraphQLString },
      name: { type: GraphQLString },
      contact: { type: GraphQLString },
      email: { type: GraphQLString },
      location: { type: GraphQLString },
      skills: { type: GraphQLString },
      hobbies: { type: GraphQLString },
      cv: { type: GraphQLString },
      status: { type: GraphQLString },
      rank: { type: GraphQLString },
      remark: { type: GraphQLString },
      remark: { type: GraphQLString },
    })
  });
  
  
  export const InternUpdateInputType = new GraphQLInputObjectType ({
    name: "InternUpdateInputType",
    description: "update Intern",
    fields: () => ({
      id: { type: new GraphQLNonNull(GraphQLString) },
      applying_date: { type: GraphQLString },
      applied_from: { type: GraphQLString },
      name: { type: GraphQLString },
      contact: { type: GraphQLString },
      email: { type: GraphQLString },
      location: { type: GraphQLString },
      skills: { type: GraphQLString },
      hobbies: { type: GraphQLString },
      cv: { type: GraphQLString },
      status: { type: GraphQLString },
      rank: { type: GraphQLString },
      remark: { type: GraphQLString },

    })
  });
  