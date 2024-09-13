import mongoose from "mongoose";

const CustomersSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
});

const Customers = mongoose.model('Customers', CustomersSchema);
export default Customers;