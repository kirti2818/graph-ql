const typeDefs = `#graphql
type Query {
    users:[User]
    quotes:[Quote]
    user(_id:ID!):User
    quote(by:ID!):[Quote]
}

type User {
    _id:ID!
    name:String
    email:String
    password:String
    quotes:[Quote]

}

type Quote {
    _id:ID
    text:String
    by:ID
}

type Mutation {
    signupUser(userNew : UserInput!):User
    signinUser(userSignin:UserSigninInput!):Token
}
type Token {
    token : String
}
input UserSigninInput {
    email:String!
    password:String!
}
input UserInput {
    _id:ID
    name:String!
    email:String!
    password:String!
}
`
export default typeDefs;