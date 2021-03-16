// 3.Գրել ծրագիր որը աշխատացնելիս կստեղծի 8 նիշանոց պատահական թվերից կազմված անուն ունեցող txt ֆայլ և այդ ֆայի մեջ
//   Օպերացիան համակարգի central processing unit (CPU) քանակը(os.cpus()):


const random = require('random');
const os = require('os');
const fs = require('fs');
let str = '.txt';
for(let i = 0; i < 8; i++){
    str = `${random.int(0,9)}` + str;
}
const data = 'CPU քանակ : ' + os.cpus().length.toString();
fs.writeFile(str,data,()=>{});


