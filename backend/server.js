import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import resolvers from './resolver.js';
// import UserModel from './models/User.js';
import typeDefs from './schemaGQL.js';
import connect from './config.js';


const server = new ApolloServer({
    typeDefs,
    resolvers,

});

const Connection = async () => {
    try {
        await connect();
        console.log("Connected to Database");

        const { url } = await startStandaloneServer(server, {
            listen: { port: 4000 },
        });
        console.log(`🚀  Server ready at: ${url}`);

    } catch (e) {
        console.log("Error in connecting to Database", e);
    }
}

Connection()


// const { url } = await startStandaloneServer(server, {
//     listen: { port: 4000 },
//   });

