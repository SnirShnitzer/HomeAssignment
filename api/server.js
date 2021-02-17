const express = require('express');
const app = express()
const bodyParser = require("body-parser")
const port = 3080


app.use(bodyParser.json());

// Configuring the database
const dbConfig = require('./config/database.config.js')
const mongoose = require('mongoose');
const { db } = require('./models/customer.model.js');
mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");  
    initData()  
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// Require Controllers routes
require('./routes/transaction.routes.js')(app);
require('./routes/customer.routes.js')(app);


// Init Assignment default data
const default_data = require('./data.json')
async function initData() {
    var transactionsCount = await db.collection('transactions').countDocuments()    
    if(transactionsCount === 0){     
        let data_with_timestamps = default_data.map( (item) => { return { ...item, createdAt: Date.now() } })        
        db.collection('transactions').insertMany([...data_with_timestamps ])
    }
}

app.get('/', (req, res) => {
    res.json({"message": "Welcome to Billing System application."});    
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});