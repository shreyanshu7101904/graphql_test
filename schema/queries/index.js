import { GraphQLObjectType } from 'graphql'
import {project, projects } from './project'

const queries = new GraphQLObjectType({
    name: 'Rootquery',
    fields: () => ({
        ...project,
        ...projects,
      })
    })
  export default queries
