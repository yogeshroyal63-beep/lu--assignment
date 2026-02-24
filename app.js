import express from "express";
import userRoutes from "./routes/user.routes.js";
import errorHandler from "./middleware/errorHandler.js";
import { swaggerUi, swaggerSpec } from "./swagger.js";

const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(errorHandler);

export default app;