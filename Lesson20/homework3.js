// 3.Գրել ծրագիր, որը կկարդա homework3.txt ֆայլի պարունակությունը, տեքստից կհեռացնի  ստորակետները  և կգրի
// replace.txt ֆայլում, որից հետո ջնջել homework3.txt ֆայլը:


const fs = require('fs');
fs.readFile('homework3.txt',(err,data)=>{
    if(err)
        console.log(err);
    fs.writeFile('replace.txt',data.toString().replace(/,/gi, ''),()=>{});
    fs.unlink('homework3.txt',()=>{})

})