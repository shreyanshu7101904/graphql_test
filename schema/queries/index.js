import { GraphQLObjectType } from 'graphql'
import {project } from './project'

const queries = new GraphQLObjectType({
    name: 'Rootquery',
    fields: () => ({
        project,
      })
    })
  export default queries
