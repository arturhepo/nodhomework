// 1. Գրել ծրագիր որը կստեղծի ֆայլ Ձեր համակարգչի user անունով և այդ ֆայլում գրել համակարգչի userinfo-ն:

const fs = require('fs');
const os = require('os');
data = os.userInfo();
fs.writeFile(os.userInfo().username,JSON.stringify(data),()=>{});








