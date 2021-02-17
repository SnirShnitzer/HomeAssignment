module.exports = (app) => {
    const transactions = require('../controllers/transaction.controller.js');
    const base_url = '/api/transactions'
    const item_url = `${base_url}/:transactionId`

    // Create a new Transaction
    app.post(base_url, transactions.create);

    // Retrieve all Transactions
    app.get(base_url, transactions.findAll);

    // Retrieve a single Transaction with transactionId
    app.get(item_url, transactions.findOne);

    // Update a Transaction with transactionId
    app.put(item_url, transactions.update);

    // Delete a Transaction with transactionId
    app.delete(item_url, transactions.delete);
}