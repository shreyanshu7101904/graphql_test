import { GraphQLObjectType } from 'graphql'
import addProject from './project/addproject.mutation'
import updateProject from './project/updateproject.mutation'


const mutations = new GraphQLObjectType({
    name: 'RootMutation',
    fields: () => ({
      ...addProject,
      ...updateProject,
    })
})

export default mutations
