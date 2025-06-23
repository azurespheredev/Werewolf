import * as dotenv from "dotenv";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as logger from "morgan";
import * as cors from "cors";
import * as passport from "passport";

import api from "./routes";
import passport_verify from "./config/passport";
import { setupSentry } from "./config/sentry";

// config
dotenv.config();
setupSentry();

const app = express();

// middleware
app.use(logger("dev"));
app.use(cors({ origin: "*" }));

app.use(bodyParser.json({ limit: "25mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "25mb" }));
app.use(passport.initialize());
passport_verify(passport);

// routes
app.use("/api", api);

app.get("/", (_, res) => {
  res
    .send("Welcome to the Jiracoders backend. You can now start using the API!")
    .status(200);
});

app.listen(process.env.PORT, () =>
  console.log(`Server is running on port ${process.env.PORT}`)
);
