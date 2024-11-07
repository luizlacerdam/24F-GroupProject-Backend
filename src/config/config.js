import dotenv from 'dotenv';

dotenv.config({ path: './config/secrets.env' });

const password = process.env.DB_PASSWORD;
/**
 * MongoDB connection string for connecting to the groupProject database.
 * 
 * @constant {string} connectionString - The connection string used to connect to the MongoDB database.
 * @example
 * const connectionString = 'mongodb+srv://username:password@cluster.mongodb.net/groupProject?retryWrites=true&w=majority&appName=appName';
 */
/**
 * Connection string for MongoDB Atlas.
 * 
 * @constant {string} connectionString - The connection string used to connect to the MongoDB Atlas cluster.
 * @example
 * // Example usage:
 * const mongoose = require('mongoose');
 * mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
 * 
 * @note
 * The password should be stored in an environment variable for security reasons.
 * Example: process.env.DB_PASSWORD
 */
const connectionString = 'mongodb+srv://gustavo213098:' 
    + `${password}@c1.3o2bb.mongodb.net/groupProject?retryWrites=true&` 
    + 'w=majority&appName=c1';

export default {
    atlasDb: connectionString,
};