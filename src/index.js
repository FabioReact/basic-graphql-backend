const { ApolloServer, gql } = require('apollo-server-express')
const express = require('express')
const fs = require('fs')
const Query = require('./resolvers/Query')

// Type Definition 
const typeDefs = gql`${fs.readFileSync(__dirname.concat('/schema.graphql'), 'utf8')}`

// Resolvers
const resolvers = {
	Query: Query
};

const apolloServer = new ApolloServer({ typeDefs: typeDefs, resolvers: resolvers })
const app = express()
apolloServer.applyMiddleware({ app });

app.listen({port: 4000}, () => {
	console.log(`Server ready at http://localhost:4000${apolloServer.graphqlPath}`)
});