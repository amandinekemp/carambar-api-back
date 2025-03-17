const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Blagues Carambar",
            version: "v1",
            description: "Une API pour récupérer des blagues Carambar",
        },
        servers: [
            {
                url: "http://localhost:3000/v1",
                description: "Serveur de développement",
            },
            {
                url: "https://carambar-api-5ec1.onrender.com/v1",
                description: "Serveur de production",
            },
        ],
    },
    apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsDoc(options);

const setupSwagger = (app) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    console.log("📄 Swagger Docs disponible sur /api-docs");
};

module.exports = setupSwagger;
