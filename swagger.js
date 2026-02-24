import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "User CRUD API",
      version: "1.0.0",
      description: "Production Ready CRUD API"
    },
    servers: [
      { url: "http://localhost:5000" }
    ]
  },
  apis: ["./routes/*.js"]
};

const swaggerSpec = swaggerJsdoc(options);

export { swaggerUi, swaggerSpec };