const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TicketSchema = new Schema({
    customerId: String,
    status: String,
    description: String,
    priority: String
}, { timestamps: true });

module.exports = mongoose.model('Ticket', TicketSchema);