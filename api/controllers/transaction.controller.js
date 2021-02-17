const Transaction = require('../models/transaction.model.js');

exports.create = (req, res) => {

  // Create a Transaction
  const transaction = new Transaction({
    customer_id: req.body.customer_id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    gender: req.body.gender,
    country: req.body.country,
    city: req.body.city,
    street: req.body.street,
    phone: req.body.phone,
    total_price: req.body.total_price,
    currency: req.body.currency,
    cerdit_card_type: req.body.cerdit_card_type,
    cerdit_card_number: req.body.cerdit_card_number
  });

  // Save Transaction in the database
  transaction.save()
    .then(data => {
      res.send(data);
  }).catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while creating the Transaction."
      });
  });
};

exports.findAll = (req, res) => {
  Transaction.find().sort({createdAt:-1})
  .then(data => {
      res.send(data);
  }).catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while retrieving transactions."
      });
  });
};

exports.findOne = (req, res) => {
  Transaction.findById(req.params.transactionId)
  .then(data => {
      if(!data) {
          return res.status(404).send({
              message: "Transaction not found with id " + req.params.transactionId
          });            
      }
      res.send(data);
  }).catch(err => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "Transaction not found with id " + req.params.transactionId
          });                
      }
      return res.status(500).send({
          message: "Error retrieving transaction with id " + req.params.transactionId
      });
  });
};

exports.update = (req, res) => {

  // Find transaction and update it with the request body
  Transaction.findByIdAndUpdate(req.params.transactionId, {
    customer_id: req.body.customer_id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    gender: req.body.gender,
    country: req.body.country,
    city: req.body.city,
    street: req.body.street,
    phone: req.body.phone,
    total_price: req.body.total_price,
    currency: req.body.currency,
    cerdit_card_type: req.body.cerdit_card_type,
    cerdit_card_number: req.body.cerdit_card_number
  }, {new: true})
  .then(data => {
      if(!data) {
          return res.status(404).send({
              message: "Transaction not found with id " + req.params.transactionId
          });
      }
      res.send(data);
  }).catch(err => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "Transaction not found with id " + req.params.transactionId
          });                
      }
      return res.status(500).send({
          message: "Error updating transaction with id " + req.params.transactionId
      });
  });
};

exports.delete = (req, res) => {
  Transaction.findByIdAndRemove(req.params.transactionId)
  .then(note => {
      if(!note) {
          return res.status(404).send({
              message: "Transaction not found with id " + req.params.transactionId
          });
      }
      res.send({message: "Transaction deleted successfully!"});
  }).catch(err => {
      if(err.kind === 'ObjectId' || err.name === 'NotFound') {
          return res.status(404).send({
              message: "Transaction not found with id " + req.params.transactionId
          });                
      }
      return res.status(500).send({
        message: "Could not delete transaction with id " + req.params.transactionId
    });
  });
};