const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({
    customer_id: String,
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    country: String,
    city: String,
    street: String,
    phone: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Customer', CustomerSchema);