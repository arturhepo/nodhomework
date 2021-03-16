const charOneSecondOutput = function (str){
    // var a = ;
    let i = 0;
    let z = 0;
    let b = setInterval(() => {
        console.log(str[z]);
        i++;
        z++;
        if(i === str.length){
            clearInterval(b);
        }


    },1000);
}
module.exports = charOneSecondOutput;