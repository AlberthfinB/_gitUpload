
//1.mencari boolean true atau false dalam object
const obj1 = { a:2 };
const obj2 = { a:1 };

function diffObj(){

    const convObj1 = obj1.a
    const convObj2 = obj2.a
    const resultTrueOrFalse = convObj1 == convObj2 ?  true : false ;
    return resultTrueOrFalse;
}
console.log(diffObj()); 

//2.mengeluarkan object yang sama 
const obj001 :{[a : string]:number}= { a: 1, b: 2 };
const obj002 :{[a : string]:number}= { a: 1, c: 3 };

function removeD()  {
    return Object.fromEntries(
        Object.entries(obj001)
            .filter(([a, b]) => obj002[a] === b)
    )
}

console.log(removeD()); 


//3. mengeluarkan object yang value sama 
const nameSt1 =[{name: "Student 1", email : "student1@mail.com"},{name: "Student 2", email : "student2@mail.com" }];
const nameSt2 =[{name: "Student 1", email : "student1@mail.com"},{name: "Student 3", email : "student3@mail.com"}]; 


function target(){
    return nameSt1.concat(nameSt2[1]);
}
console.log(target());

//4. swap key menjadi value 
const objBox = [{ name: "David", age: 20 }]

function swapObj() {
    const objboxx=objBox[0]
    return Object.fromEntries(
        Object.entries(objboxx).map(([a,b])=> [b,a])
    )
}

console.log(swapObj());

//5

function faktorial(numFak: number): number{
    if(numFak === 0){
        return 1
    }else {
        return numFak * faktorial(numFak - 1);
    }
}
console.log(faktorial(5));







