import TicketModel from '../database/models/ticket.js'; // Use import instead of require

// Responsible for creating a new ticket
export const create = async (req, res, next) => {
    try {
        const ticket = new TicketModel(req.body);
        await TicketModel.create(ticket);
        return res.status(200).json({ success: true, message: 'Ticket created.' });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

// Responsible for fetching all tickets
export const getAll = async (req, res, next) => {
    try {
        const list = await TicketModel.find();
        return res.status(200).json(list);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

// Responsible for fetching a ticket by ID
export const getById = async (req, res, next) => { // Changed getByID to getById to match the naming convention
    try {
        const { id } = req.params;
        const ticket = await TicketModel.findById(id);
        return res.status(200).json(ticket);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

// Responsible for updating a ticket by ID
export const update = async (req, res, next) => {
    try {
        const { id } = req.params;

        const ticket = new TicketModel(req.body);
        // eslint-disable-next-line no-underscore-dangle
        ticket._id = id;

        const result = await TicketModel.updateOne({ _id: id }, ticket);

        if (result.modifiedCount > 0) {
            res.status(200).json(
                { success: true, message: 'Ticket updated.' },
            );
        } else {
            throw new Error('Ticket not updated.');
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
};

// Responsible for deleting a ticket by ID
export const remove = async (req, res, next) => { // Changed delete to remove to avoid using a reserved keyword
    try {
        const { id } = req.params;

        const result = await TicketModel.findByIdAndDelete(id);
        if (result) {
            return res.status(200).json(
                { success: true, message: 'Ticket deleted.' },
            );
        } 
        throw new Error('Ticket not deleted.');
    } catch (error) {
        console.log(error);
        next(error);
    }
};