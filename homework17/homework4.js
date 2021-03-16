// 4.Գրել ծրագիր որ աշխատացնելիս  input.txt կկարդա պարունակությունը , որից հետո այդ պարունակության բոլոր բացատները
//   կփոխարին - ներով: Այնուհետև գծիկներով տեքստ գրել write.txt ֆայլում:


const fs = require('fs');
fs.readFile('input.txt',function(err,data){
    if(err){
        console.log(err);
    }
    data = data.toString().replace(/\s/g,'-');

    fs.writeFile('write.txt',data,()=>{

    })
})