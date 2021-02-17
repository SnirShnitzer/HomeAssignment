module.exports = (app) => {
    const customers = require('../controllers/customer.controller.js');
    const base_url = '/api/customers'
    const item_url = `${base_url}/:customerId`

    // Create a new Customer
    app.post(base_url, customers.create);

    // Retrieve all Customers
    app.get(base_url, customers.findAll);

    // Retrieve a single Customer with customerId
    app.get(item_url, customers.findOne);

    // Update a Customer with customerId
    app.put(item_url, customers.update);

    // Delete a Customer with customerId
    app.delete(item_url, customers.delete);
}