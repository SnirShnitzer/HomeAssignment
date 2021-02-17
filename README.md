


Recommended Scheme for this data:

Customer
- customer_id (int) - save only numbers
- first_name (string)
- last_name (string)
- email (string)
- gender_id (int)
- phone (string)

** if phone is relevant for verification or other things, maybe save numbers only as int

Customer_Address
- customer_address_id (int)
- customer_id (int)
- city (string)
- street (string)
- phone (string)
- is_primary_address (bool)

** if the location is relevant for future filtering then use code objects for: country, city


Gender
- gender_id (int)
- name (string)


Transaction Table
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


Currency Table
- currency_id (int)
- name (string)


Credit_Cards Table
- credit_card_id (int)
- credit_card_number (int) - probably will be saved encrypted or on external credit card service provider
- cerdit_card_type_id (int)


Credit_Card_Type Table
- cerdit_card_type_id (int)
- name (string)


Customer_Credit_Cards Table
- customer_id (int)
- credit_card_id (int)