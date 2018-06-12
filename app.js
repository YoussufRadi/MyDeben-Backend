import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import dotenv from "dotenv";

import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

import user from "./user/routes";
import auth from "./auth/routes";

dotenv.config();

const PORT = process.env.PORT || 80;
const app = express();

//Swagger Setup
const swaggerDocument = YAML.load("./swagger.yaml");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Application Logger
app.use(morgan("dev"));

//Routes
app.use("/user", user);
app.use("/auth", auth);

app.listen(PORT, () => {
  console.log("myDeben Listening on: " + PORT);
});

export default app;
