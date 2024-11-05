import mongoose from 'mongoose';
import config from '../config/config';

// eslint-disable-next-line import/prefer-default-export
export const connectToDatabase = function connectToDatabase() {
    mongoose.connect(config.atlasDb);

    const mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error: '));
    mongodb.once('open', () => {
        console.log('Connected to MongoDB.');
    });
};