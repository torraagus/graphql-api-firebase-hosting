import { makeExecutableSchema } from "../../node_modules/graphql-tools";

import { queries_r } from "../resolvers/queries";
import { mutations_r } from "../resolvers/mutations";

import { queries } from "./queries";
import { mutations } from "./mutations";
import { types } from "./types";
import { inputs } from "./inputs";

const resolvers = { Query: queries_r, Mutation: mutations_r };

const typeDefs = `
    ${types}
    ${inputs}
    ${queries}
    ${mutations}    
`;

export default makeExecutableSchema({ typeDefs, resolvers });
