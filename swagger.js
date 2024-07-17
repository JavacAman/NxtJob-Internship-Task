const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Razorpay API',
            version: '1.0.0',
            description: 'API documentation for Razorpay integration',
        },
        servers: [
            {
                url: 'http://localhost:3000', // Update with your actual server URL
                description: 'Development server',
            },
        ],
    },
    apis: ['./routes/*.js'], // Path to your route files
};

const specs = swaggerJsdoc(options);

module.exports = { specs, swaggerUi };
