// Generated by BUCKLESCRIPT VERSION 4.0.7, PLEASE EDIT WITH CARE

import * as ReactDOMRe from "reason-react/src/ReactDOMRe.js";
import * as ApolloLinks from "reason-apollo/src/ApolloLinks.bs.js";
import * as ReasonReact from "reason-react/src/ReasonReact.js";
import * as ReasonApollo from "reason-apollo/src/ReasonApollo.bs.js";
import * as ApolloProvider from "reason-apollo/src/ApolloProvider.bs.js";
import * as App$ReactTemplate from "./App.bs.js";
import * as ApolloInMemoryCache from "reason-apollo/src/ApolloInMemoryCache.bs.js";

var inMemoryCache = ApolloInMemoryCache.createInMemoryCache(undefined, undefined, /* () */0);

var httpLink = ApolloLinks.createHttpLink("https://fakerql.com/graphql", undefined, undefined, undefined, undefined, undefined, /* () */0);

var client = ReasonApollo.createApolloClient(httpLink, inMemoryCache, undefined, undefined, undefined, undefined, /* () */0);

ReactDOMRe.renderToElementWithId(ReasonReact.element(undefined, undefined, ApolloProvider.make(client, /* array */[ReasonReact.element(undefined, undefined, App$ReactTemplate.make(/* array */[]))])), "app");

export {
  inMemoryCache ,
  httpLink ,
  client ,
  
}
/* inMemoryCache Not a pure module */
