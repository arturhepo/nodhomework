
// 3.Ստեղծել RemoveSpecialChars կլաս, որը ժառանգում է  Transform կլասին: _transform մեթոդը վերասահմանել այնպես, որ իր
// միջով անցնող տեքստից հեռացնել հատուկ սիմվոլները:
//
// Կլասից ստեղծել օբեկտ: homeworkr5.txt պարունակությունը pipe անել օբեկտով և պահապանել homeworkw5.txt ֆայլում:


const {Writable,Readable,Duplex,Transform} = require('stream');
const fs = require('fs');
const readStream = fs.createReadStream('homeworkr3.txt',{highWaterMark:1});
const writeStream = fs.createWriteStream('homeworkw3.txt');

class RemoveSpecialChars extends Transform{
    _transform(chunk, encoding, callback) {
        if(/[\w\s]/.test(chunk.toString())){
            this.push(chunk.toString());
        }
        callback();
    }
}
const obj = new RemoveSpecialChars();
readStream.pipe(obj).pipe(writeStream);







