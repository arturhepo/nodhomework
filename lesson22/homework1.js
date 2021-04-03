// 1.  Ստեղծել homework իրադարձությունը լսող , որը կկանչի handler :
//     handler-ը պետք է արտածի Homeworks.txt պարունակությունը: emit անել homework :

const events = require('events');
const fs = require('fs').promises;

const evHom = new events.EventEmitter();
evHom.on('homework',handler);
evHom.emit('homework');
 async function handler (){
    const readable = await fs.readFile('./homeworks.txt',"utf-8");
        console.log(readable);
}









