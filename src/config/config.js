import dotenv from 'dotenv';

dotenv.config({ path: './secrets.env' });

const password = process.env.DB_PASSWORD;

// Your connection string
/**
 * MongoDB connection string.
 * 
 * This connection string is used to connect to the MongoDB database for the group project.
 * It includes the username and password for authentication, the cluster address, and 
 * additional connection options.
 * 
 * @constant {string} connectionString - The MongoDB connection string.
 */
const connectionString = 'mongodb+srv://gustavo213098:' 
    + `${password}@c1.3o2bb.mongodb.net/groupProject?retryWrites=true&` 
    + 'w=majority&appName=c1';

export default {
    atlasDb: connectionString,
};