const currentTime = function (){
    const dat = new Date();
    return dat.getHours() + ' : ' + dat.getMinutes() + ' : ' + dat.getSeconds() + ' : ' + dat.getMilliseconds();
};
 module.exports = currentTime;