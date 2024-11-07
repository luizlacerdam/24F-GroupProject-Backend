const UserModel = require('../database/models/user');

// Responsible for fetching all users and excluding password field
module.exports.getAll = async (req, res, next) => {
    try {
        const list = await UserModel.find().select('-password');
        return res.status(200).json(list);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

// Responsible for fetching a user by ID and excluding password field
module.exports.getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await UserModel.findById(id).select('-password');
        return res.status(200).json(user);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

// Responsible for creating a new user
module.exports.create = async (req, res, next) => {
    try {
        const user = new UserModel(req.body);

        // eslint-disable-next-line no-unused-vars
        const result = await UserModel.create(user);
        return res.status(201).json({
            success: true,
            message: 'User created successfully.',
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

// Responsible for updating an existing user by ID
module.exports.update = async (req, res, next) => {
    try {
        const { id } = req.params;

        const user = new UserModel(req.body);
        // eslint-disable-next-line no-underscore-dangle
        user._id = id;

        const result = await UserModel.updateOne({ _id: id }, user);

        if (result.modifiedCount > 0) {
            return res.status(200).json(
                { success: true, message: 'User updated.' },
            );
        } 
        throw new Error('User not updated.');
    } catch (error) {
        console.log(error);
        next(error);
    }
};

// Responsible for deleting a user by ID
module.exports.delete = async (req, res, next) => {
    try {
        const { id } = req.params;

        const result = await UserModel.findByIdAndDelete(id);
        if (result) {
            return res.status(200).json(
                { success: true, message: 'User deleted.' },
            );
        } 
        throw new Error('User not deleted.');
    } catch (error) {
        console.log(error);
        next(error);
    }
};
