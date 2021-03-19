// 2.Գրել ծրագիր որ լատինատառ տեքստը որևէ մոտավորությամբ կսարքի հայատառ: Օրինակ ա տառը կդառնա a:Այդպես բոլոր տառերը:
// Ստեղծել readStream և highWaterMark:1  նշելով բոլոր սիմվոլների վրայով անցնել:
// Ծրագիրը աշխատացնել homework4Eng.txt համար:

const fs = require('fs');

const translate = function(str){
    let strArm = '';
    const arrArm = ['ա','բ','գ','դ','ե','զ','է','ը','թ','ժ','ի','լ','խ','ծ','կ','հ','ձ','ղ','ճ','մ','յ','ն','շ','ո',
        'չ','պ','ջ','ռ','ս','վ','տ','ր','ց','ու','փ','ք','և','օ','ֆ',' '];
    const arrLat = ['a','b','g','d','e','z','e','@','t','j','i','l','kh','ts','k','h','dz','gh','ch','m','y','n','sh','o',
        'ch','p','dj','r','s','v','t','r','c','u','p','q','ev','o','f',' '];
    for(let i = 0;i < str.length;i++){
        strArm += arrArm[arrLat.indexOf(str[i])];
    }
    return strArm;

}

const readStream = fs.createReadStream('homework2Eng.txt',{highWaterMark:1});
const writeStream = fs.createWriteStream('homework2Arm.txt');

readStream.on('data',function (chunk){
    writeStream.write(translate(chunk.toString()));
})