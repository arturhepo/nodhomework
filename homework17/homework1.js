// Գրել ծրագիր որը աշխատացնելիս console-ում կարտածի ամբողջ օպերատիվ հիշողությունը (total amount of system memory):

const os = require('os');
const gigabite = 1/1024**3;
console.log(os.totalmem()*gigabite + 'gb');
