// 5.Գրել ծրագիր որ աշխատացնելիս sync կկարադա նախորդ չորս տնայիների ֆայլերի պարունակությունը(Օրինակ homework1.js,
//  homework2.js, homework3.js, homework4.js):Այնուհետև ծրագիրը պետք է ստեղծի txt ֆայլ, որի անուն կազմված կլնի
//  օպերացոն համակարգի անունիցև այդ պահին ժամ րոպե վարկյանից(win32_14_14_58.txt)և այդ ֆայլում գրել նախորդ ֆայլերի
//  պարունակությունը:



const fs = require('fs');
const os = require('os');
const hom1 = fs.readFileSync('homework1.js');
const hom2 = fs.readFileSync('homework2.js');
const hom3 = fs.readFileSync('homework3.js');
const hom4 = fs.readFileSync('homework4.js');

const date = new Date();
const fileName = os.platform() + '_' + date.getHours() + '_' + date.getMinutes() + '_' + date.getSeconds() + '.txt';
data = hom1 + hom2 + hom3 + hom4;
fs.writeFileSync(fileName,data,()=>{});









