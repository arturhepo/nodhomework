//     4.Ունենք const web=['html','css','js','txt'] զանգված: Գրել ծրագի որ կստեղծի զանգվածի անունով պապկա: Զանգվածի
// անդամներից այդ պապկայում ստեղծել  ֆայլեր հերթական անդամի անունով և վերջավորությունն էլ նույնը լինի(օրինակ html.html)
// պարունակություն էլ այդ անդամը:


const fs = require('fs');
const web=['html','css','js','txt'];
fs.mkdir('web',(err)=>{
    if(err)
        console.log(err);
});

for(let i of web){
    fs.writeFile(`./web/${i}.${i}`,`${i}`,(err)=>{
        if(err)
            console.log(err);
    })
}
