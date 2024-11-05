import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
    username: String,
    email: String,
    password: String,
    role: String,
});

export default mongoose.model('User', UserSchema);