// 2.Server-ում ունենք sunny.txt ֆայլ: Ստեղծել սերվեր, որին հարցում ուղարկելիս եթե կա query-ի մեջ file դաշտը և այն
// հավասար է "sunny", որպես response ստանա sunny.txt պարունակությունը այլապես 404 status-ով ստանա "File Not Found".
// (Օգտագործել Get մեթոդը):

const http = require('http');
const fs = require('fs');
http.createServer(function (req,res){
    if(req.url.indexOf('file=sunny') > -1 ) {
       fs.createReadStream('sunny.txt').pipe(res)
    }else {
        res.statusCode = 404;
        res.end('File Not Found');
    }
}).listen(3000);