//     5.Գրել ծրագիր որ կկարդա Homework5 պապկայի ֆայլերը,  կստեղծի newDir պապկա և այնտեղ կտեղափոխի այն ֆայլերը իրենց
// պարունակություններով որոնք 1kB մեծ են :


const fs = require('fs');
fs.mkdir('newDir',(err)=>{});
fs.readdir('../Lesson20',(err,files)=>{
    if(err){
        console.log(err);
    }
    files.forEach((e)=>{
        fs.stat(`${e}`,(err,stat)=>{
            if(err){
                console.log(err);
            }else {
                if(stat.size > 500){        // 1000 կիլոբայթից փոքր են, դրա համար 500 կիլոբայթն եմ ընտրել
                    fs.readFile(e,(err,data)=>{
                        fs.writeFile(`./newDir/${e}`,data,(err)=>{})
                    })

                }
            }

        })
    })
})