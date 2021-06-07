import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://driven-mammal-79.hasura.app/v1/graphql",
    cache: new InMemoryCache(),
    headers: {
        "x-hasura-admin-secret": "1S440jianGhUdL0kPUzoH8OXZtTZb374nktQMLmWZRxHGIqJh9PmNrSvAqR5SVly"
}
});

export default client;