const wordsFromString = function (str){
    const arr = str.split(' ');
    let arrNew = [];
    for(let i of arr){
        if(!/\W/.test(i)){
            arrNew.push(i)
        }
    }
    arrNew.forEach((e)=>{
        console.log(e);
    })
}

module.exports = wordsFromString;