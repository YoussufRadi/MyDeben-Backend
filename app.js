import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import dotenv from "dotenv";
import expressValidation from "express-validation";

import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

import user from "./user/routes";
import auth from "./auth/routes";
import store from "./store/routes";

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
app.use("/store", store);

app.use((req, res, next) => {
  res.status(404).json({ detail: "route doesn't exist" });
});

app.use((err, req, res, next) => {
  if (err instanceof expressValidation.ValidationError) {
    res.status(err.status).json(err);
  } else {
    res.status(500).json({
      status: err.status,
      message: err.message
    });
  }
});

app.listen(PORT, () => {
  console.log("myDeben Listening on: " + PORT);
});

export default app;
