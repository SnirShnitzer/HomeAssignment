const Customer = require('../models/customer.model.js');

exports.create = (req, res) => {
  // Create a Customer
  const customer = new Customer({
    customer_id: req.body.customer_id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    gender: req.body.gender,
    country: req.body.country,
    city: req.body.city,
    street: req.body.street,
    phone: req.body.phone
  });

  // Save Customer in the database
  customer.save()
    .then(data => {
      res.send(data);
  }).catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while creating the Customer."
      });
  });
};

exports.findAll = (req, res) => {
  Customer.find().sort({createdAt:-1})
  .then(data => {
      res.send(data);
  }).catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while retrieving customers."
      });
  });
};

exports.findOne = (req, res) => {
  Customer.findById(req.params.customerId)
  .then(data => {
      if(!data) {
          return res.status(404).send({
              message: "Customer not found with id " + req.params.customerId
          });            
      }
      res.send(data);
  }).catch(err => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "Customer not found with id " + req.params.customerId
          });                
      }
      return res.status(500).send({
          message: "Error retrieving customer with id " + req.params.customerId
      });
  });
};

exports.update = (req, res) => {
    //TODO: Validate request    

  // Find customer and update it with the request body
  Customer.findByIdAndUpdate(req.params.customerId, {    
    customer_id: req.body.customer_id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    gender: req.body.gender,
    country: req.body.country,
    city: req.body.city,
    street: req.body.street,
    phone: req.body.phone
  }, {new: true})
  .then(data => {
      if(!data) {
          return res.status(404).send({
              message: "Customer not found with id " + req.params.customerId
          });
      }
      res.send(data);
  }).catch(err => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "Customer not found with id " + req.params.customerId
          });                
      }
      return res.status(500).send({
          message: "Error updating customer with id " + req.params.customerId
      });
  });
};

exports.delete = (req, res) => {
  Customer.findByIdAndRemove(req.params.customerId)
  .then(note => {
      if(!note) {
          return res.status(404).send({
              message: "Customer not found with id " + req.params.customerId
          });
      }
      res.send({message: "Customer deleted successfully!"});
  }).catch(err => {
      if(err.kind === 'ObjectId' || err.name === 'NotFound') {
          return res.status(404).send({
              message: "Customer not found with id " + req.params.customerId
          });                
      }
      return res.status(500).send({
        message: "Could not delete customer with id " + req.params.customerId
    });
  });
};