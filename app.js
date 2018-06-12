import express from "express";
import routes from "./routes";
import user from "./user/routes";
import bodyParser from "body-parser";
import morgan from "morgan";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

//Routes
app.use("/", routes);
app.use("/users", user);

app.listen(PORT, () => {
  console.log("Tangram CRM Listening on: " + PORT);
});

export default app;
