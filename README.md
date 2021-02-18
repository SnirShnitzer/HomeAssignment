## Personal notes:
- I don't have a lot of experience creating docker, so i preferred provding the project on github with manual run.
- In order to activate the google maps feature, I've send the .env file that contains the Google Api key on the mail.


## Pre Requirements:
- Node.js: https://nodejs.org/en/
- MongoDB: https://www.mongodb.com/try/download/community


## How to run:
### Run api:
- open cmd
- cd api
- npm install
- node server.js

### Run site:
- add .env to the project with the .env for the REACT_APP_GOOGLE_API_KEY
- open cmd
- cd billing-system
- npm install
- npm start



## Recommended Scheme for this data:

### Customer
- customer_id (int) - save only numbers
- first_name (string)
- last_name (string)
- email (string)
- gender_id (int)
- phone (string)

** if phone is relevant for verification or other things, maybe save numbers only as int

### Customer_Address
- customer_address_id (int)
- customer_id (int)
- city (string)
- street (string)
- phone (string)
- is_primary_address (bool)

** if the location is relevant for future filtering then use code objects for: country, city


### Gender
- gender_id (int)
- name (string)


### Transaction
- transaction_id (int)
- customer_id (int)
- country (string)
- city (string)
- street (string)
- phone (string)
- total_price (decimal)
- currency_id (int)
- credit_card_id (int)

** some of the customer data may be changed, save only the data relevant for the transaction


### Currency
- currency_id (int)
- name (string)


### Credit_Cards
- credit_card_id (int)
- credit_card_number (int) - probably will be saved encrypted or on external credit card service provider
- cerdit_card_type_id (int)


### Credit_Card_Type
- cerdit_card_type_id (int)
- name (string)


### Customer_Credit_Cards
- customer_id (int)
- credit_card_id (int)




## TODO: (optional features to add)
- Add fitlering to the tables
- Add lazy load / paging to the tables
- Get address from google
- Add Select to the form for gender and credit card type
- Add more validations to the form (phone, email and more)
