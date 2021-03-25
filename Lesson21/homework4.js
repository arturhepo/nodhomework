// 4․ Ստեղծել myMap մեթոդ Array-ի համարար , որը կաշխատի ինչպես map մեթոդը. [].map(fn) -ը կարողանանք գրել
//     [].myMap(fn) -ի միջոցով ։


Array.prototype.myMap = function(cb){
    let arr = [];
    for(let i of this){
        arr.push(cb(i));
    }
    return arr;
};

console.log([1, 2, 3, 4, 5, 6].myMap(e => e**2));