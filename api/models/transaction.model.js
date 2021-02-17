  
const mongoose = require('mongoose');

const TransactionSchema = mongoose.Schema({
    customer_id: String,
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    country: String,
    city: String,
    street: String,
    phone: String,
    total_price: Number,    
    currency: String, 
    cerdit_card_type: String,  
    cerdit_card_number: Number    
}, {
    timestamps: true
});

module.exports = mongoose.model('Transaction', TransactionSchema);