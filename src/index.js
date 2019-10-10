const { ApolloServer, gql } = require('apollo-server')
const fs = require('fs')
const Query = require('./resolvers/Query')

// Type Definition 
const typeDefs = gql`${fs.readFileSync(__dirname.concat('/schema.graphql'), 'utf8')}`;

// Resolvers
const resolvers = {
	Query: Query
};

const server = new ApolloServer({ typeDefs: typeDefs, resolvers: resolvers });

server.listen().then(({ url }) => {
	console.log(`Server ready at ${url}`);
});