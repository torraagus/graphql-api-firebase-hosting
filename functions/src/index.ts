import * as functions from "firebase-functions";
import * as express from "express";
import * as graphqlHTTP from "express-graphql";
import * as cors from "cors";
import schema from "./schema/schema";

import { connect } from "./database";

const app = express();
connect().catch((e) => {
  console.log(e);
});

// settings

// middlewares
app.use(cors());

// routes
app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: schema,
    context: {
      message: "Hola!",
    },
  })
);

exports.app = functions.https.onRequest(app);
