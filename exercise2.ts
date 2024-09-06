//odd even
let _odd1 : number = 25;
console.log(_odd1 % 2 == 1 ? `${_odd1} is  odd`: `${_odd1} is  even`); 

let _even1 : number = 2;
console.log(_even1 % 2 == 0 ? `${_even1} is even` : `${_even1} is odd`);


//prime
let _primeNumber : number = 7;
console.log(_primeNumber / _primeNumber == 1 && _primeNumber / 1 == _primeNumber && _primeNumber % 2 !==0 ? `${_primeNumber} is a prime number` : `${_primeNumber} is not prime number`);

let _primeNumber2 : number = 6;
console.log(_primeNumber2 / _primeNumber2 == 1 && _primeNumber2 / 1 == _primeNumber2 && _primeNumber2 % 2 !==0 ? `${_primeNumber2} is a prime number` : `${_primeNumber2} is not prime number`);


//sum to n
let _n : number = 5;
let _sum : number = 0;
for (let i = 1; i <= _n; i++) {
    console.log(i);
    
    _sum += i;  
}
console.log(_sum);

let _n1 : number = 3;
let _sum1 : number = 0;
for (let i = 1; i <= _n1; i++) {
    console.log(i);
    
    _sum1 += i; 
}
console.log(_sum1);



