// filepath: /workspaces/Personal-learning-projects/Web Development/Full Stack/Password-Manager_Mongo_DB/backend/src/config/config.js
const dotenv = require('dotenv');

dotenv.config();

const config = {
    PORT: process.env.PORT || 3000,
    DB_URI: process.env.DB_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    APP_NAME: process.env.APP_NAME || 'Password Manager',
};

export default config;