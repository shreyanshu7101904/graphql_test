import { GraphQLObjectType } from 'graphql'
import addProject from './project/addproject.mutation'
import updateProject from './project/updateproject.mutation'
import addIntern from './intern/addintern.mutation'
import updateIntern from './intern/updateintern.mutation'


const mutations = new GraphQLObjectType({
    name: 'RootMutation',
    fields: () => ({
      ...addProject,
      ...updateProject,
      ...addIntern,
      ...updateIntern,
    })
})

export default mutations
