// mencari lowest , highest , average
const arr1 : number [] = [12,5,23,18,4,45,32];
function findingScore() {

   const lowest = Math.min(...arr1.map((a ) => a));
   const highest = Math.max(...arr1.map((a) => a));
   const findAverage = arr1.reduce((a,b) => a+b);
   const average = findAverage/arr1.length;

   return `lowest: ${lowest}, highest: ${highest}, average: ${average}`
    
}
console.log(findingScore());

//menganti index terakhir dan menambahkan
const fruits = ["apple", " banana","cherry" ,"date"]
function changeLastIndex(){
    const takeLast = fruits.slice(fruits.length-1);
    fruits[fruits.length-1]= `and ${takeLast}`;
    return fruits;
}
console.log(changeLastIndex());

// mencari angka ke dua terendah

const boxNumber = [5,3,1,7,2,6];
function findTwoLast(){
    const find = boxNumber.sort((a,b) => a-b)
    return find[1];
};
console.log(findTwoLast());

//menambahkan dua array menjadi satu 
const _arr1 = [1,2,3];
const _arr2 = [3,2,1];

function combineArr(){
    return _arr1.map((a,b) => a+ _arr2[b])
}
console.log(combineArr());

// menambah angka di akhir array dan jika ada angka yang sama di dalam array maka akan di keluarkan
const numberArr = [1,2,3,4];
function findDupAndPlus(a:number){
    const plus =numberArr[-0]=a;
    const dupe = [...new Set(numberArr)].sort((b,c) => b-c);
    return dupe
}
console.log(findDupAndPlus(6));


