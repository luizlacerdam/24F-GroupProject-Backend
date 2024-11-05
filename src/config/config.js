import dotenv from 'dotenv';

dotenv.config({ path: './config/secrets.env' });

const password = process.env.DB_PASSWORD;
const connectionString = 'mongodb+srv://gustavo213098:' + 
    `${password}@c1.3o2bb.mongodb.net/groupProject?retryWrites=true&` +
    'w=majority&appName=c1';

export default {
    atlasDb: connectionString,
};