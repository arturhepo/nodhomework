// 4.Ստեղծել Promise վերադարձնող ֆունկցիա որը ստանում է տեքստ ֆայլի հասցե և տեքստի բառերի առաջին տառերը սաքում մեծատառ․

const fs = require('fs/promises');
function text(str){
    fs.readFile(str).then((data)=>{
       const arr =  data.toString().split(' ');
       // console.log(arr);
       const arrNew = arr.map((e)=>e[0].toUpperCase() + e.slice(1))
        // console.log(arrNew.join(' '));
        fs.writeFile('homeworkUpper4.txt',arrNew.join(' '));
    }).catch(()=>{})
}

text('hom4.txt');
