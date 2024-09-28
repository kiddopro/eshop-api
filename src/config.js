require('dotenv').config();

const port = process.env.PORT || 3001;
const baseUrl = process.env.BASE_URL || 'http://localhost';
const environment = process.env.NODE_ENV || 'development';

module.exports = { port, baseUrl, environment };
