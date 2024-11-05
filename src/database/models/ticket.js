import mongoose from 'mongoose';

const { Schema } = mongoose;

const TicketSchema = new Schema(
{
    customerId: String,
    status: String,
    description: String,
    priority: String,
}, 
{ 
    timestamps: true, 
},
);

export default mongoose.model('Ticket', TicketSchema);