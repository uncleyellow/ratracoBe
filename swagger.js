const swaggerJsDoc = require('swagger-jsdoc');
const PORT = process.env.PORT || 3001;

// Các tùy chọn cho Swagger
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0', // Phiên bản OpenAPI
    info: {
      title: 'Ratraco API',
      version: '1.0.0',
      description: 'API documentation Ratraco',
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  apis: ['./routes/**/*.js'], // Đường dẫn đến tất cả các tệp chứa các định nghĩa API
};

module.exports = swaggerOptions;