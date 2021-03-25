// 3. Server-ում ունենք users.json ֆայլ, որը զանգված է կազմված "fisrt_name", "last_name", "email", "age" դաշտեր պարունակող
// օբյեկտներից ։ Ստեղծել սերվեր, որին հարցում ուղարկելիս եթե կա query-ի մեջ filter դաշտը , վերադարձնել users.json-ից
// զանգված միայն այն օբյեկներից, որոնց "fisrt_name" կամ "last_name" պարունակում է filter-ի արժեքը։

const http = require('http');
const users = require('./users.json');
const fs = require('fs');
http.createServer(function (req,res){
    const arr = [];
    for(let i in users){
        if(req.url.indexOf(`filter=${users[i].fisrt_name}`) > -1 || req.url.indexOf(`filter=${users[i].last_name}`) > -1){
            arr.push(users[i]);
        }
    }
    res.end(JSON.stringify(arr));
    console.log(arr);
}).listen(3000)




