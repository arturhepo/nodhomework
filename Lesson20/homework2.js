// 2. Գրել ծրագիր որ նախորդ առաջադրանքի կողմից ստեղծված ֆայլ կանվանափոխի այդ պահի ամիս, օր, ժամ, րոպեով,
//     վայրկյանով (Օրինակ 10_11_15_32_13.txt):


const fs = require('fs');
const date = new Date();
newPath = `${date.getMonth()}_${date.getDate()}_${date.getHours()}_${date.getMinutes()}_${date.getSeconds()}.txt`

fs.rename('artur',newPath,(err)=>{
    if(err)
        console.log(err);
})