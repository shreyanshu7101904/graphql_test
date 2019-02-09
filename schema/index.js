import { GraphQLSchema } from 'graphql'
import queries from './queries'


const schema = new GraphQLSchema({
    query: queries,
    });

export default schema;
