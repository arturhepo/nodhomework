// 2. Գրել ծրագիր որ աշխատացնելիս console-ում կարտածի IPv4 IP հասցեն(os.networkInterfaces()):

const os = require('os');
const netObj = os.networkInterfaces();
for(let i in netObj){
    console.log(netObj[i][1].address);
    break;
}
