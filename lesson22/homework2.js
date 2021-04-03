// 2. Ստեղծել express framework-ով web aplication : Ստեղծել /users route , որին կարող են կատարել
// GET, POST , PUT և DETELE մեթոդներով request-ներ ։ Բոլորի դեպքում վերադարձնում որպես response ժամը և մեթոդի անունը։

const express = require('express');
const app = express();
const users = require('./users');
app.use('/users',users);
app.listen(3333);