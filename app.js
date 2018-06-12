import express from "express";
import routes from "./routes";
import user from "./user/routes";
import bodyParser from "body-parser";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

const PORT = process.env.PORT || 5000;
const app = express();

//Swagger Setup
const swaggerDocument = YAML.load("./swagger.yaml");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Application Logger
app.use(morgan("dev"));

//Routes
app.use("/", routes);
app.use("/users", user);

app.listen(PORT, () => {
  console.log("Tangram CRM Listening on: " + PORT);
});

export default app;
