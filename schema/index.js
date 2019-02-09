import { GraphQLSchema } from 'graphql'
import queries from './queries'
import mutations from './mutations'


const schema = new GraphQLSchema({
    query: queries,
    mutation: mutations,
    });

export default schema;
