import { GraphQLObjectType } from 'graphql'
import {project, projects } from './project'
import {intern, interns } from './intern'

const queries = new GraphQLObjectType({
    name: 'Rootquery',
    fields: () => ({
        ...project,
        ...projects,
        ...intern,
        ...interns,
        
      })
    })
  export default queries
