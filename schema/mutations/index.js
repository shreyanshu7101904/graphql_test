import { GraphQLObjectType } from 'graphql'
import addProject from './project/addproject.mutation'


const mutations = new GraphQLObjectType({
    name: 'RootMutation',
    fields: () => ({
      ...addProject,
    })
})

export default mutations
