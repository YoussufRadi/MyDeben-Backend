import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import dotenv from "dotenv";
import expressValidation from "express-validation";
import cors from "cors";

import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

import user from "./user/routes";
import auth from "./auth/routes";
import store from "./store/routes";
import file from "./file";

dotenv.config();

const app = express();
const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

function normalizePort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) return val;
  if (port >= 0) return port;
  return false;
}

const options = {
  explorer: true,
  customCss: ".swagger-ui .topbar { display: none }"
};
// Swagger Setup
const swaggerDocument = YAML.load("./apiDoc.yaml");
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, options)
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Application Logger
app.use(morgan("dev"));

// Routes
app.use("/api/user", user);
app.use("/api/auth", auth);
app.use("/api/storstore", store);
app.use("/api/file", file);

app.use((req, res) => {
  res.status(404).json({ detail: "route doesn't exist" });
});

app.use((err, req, res, next) => {
  if (err instanceof expressValidation.ValidationError) {
    res.status(err.status).json({ detail: err.errors });
  } else {
    res.status(500).json({
      status: err.status,
      message: err.message
    });
  }
});

app.listen(port, () => {
  console.log(`myDeben Listening on: ${port}`);
});

export default app;
